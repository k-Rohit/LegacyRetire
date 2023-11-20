# import streamlit as st
# import PyPDF2
# import tempfile
# from langchain.llms import GooglePalm
# from langchain.chat_models import ChatGooglePalm
# from langchain.schema import AIMessage, HumanMessage, SystemMessage

# st.set_page_config(page_title="FINANCE GUIDE GENERATIVE BOT", page_icon=":books:", layout="wide", initial_sidebar_state="expanded")

# st.markdown(
#     """
#     <style>
#         .result-section {
#             background-color: black;
#             color: white;
#             padding: 10px;
#             border-radius: 5px;
#             margin-bottom: 20px;  /* Add margin for better spacing */
#         }
#     </style>
#     """,
#     unsafe_allow_html=True
# )

# # Display a text heading
# st.title("Welcome to the Finance Guide Generative Bot")

# # Additional text content
# st.write("This is a Streamlit app for generating finance-related content.")

# # Add a file uploader for PDF files
# pdf_file = st.file_uploader("Upload a PDF file", type=["pdf", "txt"])

# # Add a submit button
# submit_button = st.button("Submit")

# # Check if the user has submitted data
# if submit_button and pdf_file:
#     # Save the PDF content to a temporary file
#     with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
#         temp_pdf.write(pdf_file.read())

#     # Perform PDF text extraction using PyPDF2
#     pdf_content = ""
#     with open(temp_pdf.name, "rb") as pdf_file:
#         pdf_reader = PyPDF2.PdfReader(pdf_file)
#         for page_number in range(len(pdf_reader.pages)):
#             page = pdf_reader.pages[page_number]
#             pdf_content += page.extract_text()

#     # Perform financial analysis using langchain
#     api_key = 'AIzaSyByFoyQYuNDC9jsCwdNfs8_UhgmPNJWHJI'
#     chat = ChatGooglePalm(google_api_key=api_key)

#     # Replace the static prompt with your specific prompt
#     prompt = '''
#     You are a financial expert who is able to analyze one's personal monthly credit card statement, bank account statement, and cash
#     expense log, and give a deep analysis on what went good, what went wrong, and recommend some actionable items to improve one's personal financial health.
#     "analysis" consists of the in-depth analysis and statistics summary that is important for the user to know about their personal financial condition.
#     "financial health" is the rating of one's financial condition based on the analysis provided.
#     "recommendation" is the final recommendation that the advisor will give to the user so that they can improve their financial health in the upcoming month.
#     Also, tell how they can save for their retirement. and never say that you should take financial advice from professionals as every one knows it.
#     Let's start!!!
#     '''

#     # Create langchain messages
#     messages = [SystemMessage(content=prompt), HumanMessage(content=pdf_content)]

#     # Perform chat-based financial analysis
#     output = chat(messages)

#     # Display the analysis output with Markdown formatting
#     st.subheader("Financial Analysis Result:")
#     st.markdown(f"<div class='result-section'>{output.content}</div>", unsafe_allow_html=True)

#     # Remove the temporary file
#     temp_pdf.close()

import streamlit as st
import fitz  # PyMuPDF
import tempfile
from langchain.llms import GooglePalm
from langchain.chat_models import ChatGooglePalm
from langchain.schema import AIMessage, HumanMessage, SystemMessage

# Initialize the chat model
api_key = 'AIzaSyByFoyQYuNDC9jsCwdNfs8_UhgmPNJWHJI'
chat_model = ChatGooglePalm(google_api_key=api_key)

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

st.set_page_config(page_title="Expense Analyzer", page_icon=":books:", layout="wide", initial_sidebar_state="expanded")

# Introduction message
st.title("Expense Analyzer")
# Set initial prompt for financial analysis
initial_prompt = '''
You are a financial expert who is able to analyze one's personal monthly credit card statement, bank account statement, and cash
expense log, and give a deep analysis on what went good, what went wrong, and recommend some actionable items to improve one's personal financial health.
Return the response in a bulleted list format with analysis, financial health, and recommendation also so that I don't waste my money
"analysis" consists of the in-depth analysis and statistics summary that is important for the user to know about their personal financial condition.
"financial health" is the rating of one's financial condition based on the analysis provided.
"recommendation" is the final recommendation that the advisor will give to the user so that they can improve their financial health in the upcoming month.
When a user asks a question search through the document, analyse clearly then give answers.
Let's start!!!
'''

# Live Chat Section
st.subheader("Input your query or upload your document")

# Create a placeholder for live chat messages
chat_messages_placeholder = st.empty()

# Add initial prompt as a system message only if it's not in the conversation
if not any(isinstance(message, SystemMessage) for message in st.session_state.messages):
    st.session_state.messages.append(SystemMessage(content=initial_prompt))

user_input = st.text_input("Type your message:")
submit_chat_button = st.button("Submit Chat")

pdf_upload = st.file_uploader("Upload a PDF file", type=["pdf"])
submit_pdf_button = st.button("Submit PDF")

def perform_chat(messages):
    try:
        # Get model response
        model_response = chat_model(messages)

        # Modify the content to remove asterisks and bold formatting
        cleaned_content = model_response.content.replace("* **", "").replace("**", "")

        # Add model response to the conversation
        st.session_state.messages.append(AIMessage(content=cleaned_content))
        # st.session_state.messages.append(AIMessage(content=model_response.content))

        # Display ongoing chat conversation in a text box
        chat_text = ""
        for message in st.session_state.messages:
            if isinstance(message, HumanMessage):
                chat_text += f"User: {message.content}\n"
            elif isinstance(message, AIMessage):
                chat_text += f"Model: {message.content}\n"

        chat_messages_placeholder.text_area("Chat Conversation", value=chat_text, height=200)

    except Exception as e:
        # Handle the exception gracefully
        st.error(f"An error occurred: {str(e)}")

try:
    if submit_chat_button and user_input:
        # Add user message to the conversation
        st.session_state.messages.append(HumanMessage(content=user_input))

        # Perform the chat
        perform_chat(st.session_state.messages)

    if submit_pdf_button and pdf_upload:
        # Save the PDF content to a temporary file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
            temp_pdf.write(pdf_upload.read())

        # Clear previous messages and add the initial prompt
        st.session_state.messages = [SystemMessage(content=initial_prompt)]

        # Add user's PDF content to the conversation
        st.session_state.messages.append(HumanMessage(content=temp_pdf.name))

        # Perform the chat
        perform_chat(st.session_state.messages)

except Exception as e:
    # Handle the exception gracefully
    st.error(f"An error occurred: {str(e)}")

# Clear chat session
clear_chat_button = st.button("Clear Chat")
if clear_chat_button:
    st.session_state.messages = []
    chat_messages_placeholder.text_area("Chat Conversation", value='chat_text', height=800)
    
