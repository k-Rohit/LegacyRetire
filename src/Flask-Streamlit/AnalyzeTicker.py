import yfinance as yf
import pandas as pd

def analyze_ticker(ticker):
    # Download historical data for the current ticker
    data = yf.download(ticker, start='2000-01-01')

    # Calculate the 200-day moving average
    data['MA'] = data['Close'].rolling(window=200).mean()

    # Calculate the RSI
    delta = data['Close'].diff()
    gain = delta.where(delta > 0, 0)
    loss = -delta.where(delta < 0, 0)
    avg_gain = gain.rolling(window=14).mean()
    avg_loss = loss.rolling(window=14).mean()
    rs = avg_gain / avg_loss
    rsi = 100 - (100 / (1 + rs))

    # Calculate A/D Lines
    data['UpMove'] = data['High'] - data['High'].shift(1)
    data['DownMove'] = data['Low'].shift(1) - data['Low']
    data['UpVolume'] = data['UpMove'] * data['Volume']
    data['DownVolume'] = data['DownMove'] * data['Volume']
    data['PosDM'] = data['UpMove']
    data['NegDM'] = data['DownMove']
    data.loc[data.UpMove < data.DownMove, 'PosDM'] = 0
    data.loc[data.UpMove > data.DownMove, 'NegDM'] = 0
    data['PosDI'] = data['PosDM'].rolling(window=14).mean()
    data['NegDI'] = data['NegDM'].rolling(window=14).mean()
    data['AD'] = (data['PosDI'] - data['NegDI']) / (data['PosDI'] + data['NegDI'])

    # Calculate ADX
    data['ADX'] = 100 * (data['PosDI'] - data['NegDI']) / (data['PosDI'] + data['NegDI'])
    data['ADX'] = data['ADX'].rolling(window=14).mean()

    # Determine the recommendation
    if data['Close'].iloc[-1] > data['MA'].iloc[-1] and rsi.iloc[-1] > 70 and data['AD'].iloc[-1] > data['AD'].iloc[-2] and data['ADX'].iloc[-1] > 25:
        recommendation = 'Buy'
    elif data['Close'].iloc[-1] < data['MA'].iloc[-1] and rsi.iloc[-1] < 30 and data['AD'].iloc[-1] < data['AD'].iloc[-2] and data['ADX'].iloc[-1] > 25:
        recommendation = 'Sell'
    else:
        recommendation = 'Hold'

    return {
        'Ticker': ticker,
        'Moving Average': data['MA'].iloc[-1],
        'RSI': rsi.iloc[-1],
        'A/D Lines': data['AD'].iloc[-1],
        'ADX': data['ADX'].iloc[-1],
        'Recommendation': recommendation
    }
