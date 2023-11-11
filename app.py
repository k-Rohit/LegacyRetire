# import streamlit as st
# import fitz# PyMuPDF
# import tempfile
# from langchain.llms import GooglePalm
# from langchain.chat_models import ChatGooglePalm
# from langchain.schema import AIMessage, HumanMessage, SystemMessage



# st.set_page_config(page_title="FINANCE GUIDE GENERATIVE BOT", page_icon=":books:", layout="wide", initial_sidebar_state="expanded")

# # Display a text heading
# st.title("Welcome to the Finance Guide Generative Bot")

# # Additional text content
# st.write("This is a Streamlit app for generating finance-related content.")

# # Add a file uploader for PDF files
# pdf_file = st.file_uploader("Upload a PDF file", type=["pdf","txt"])

# # Add a submit button
# submit_button = st.button("Submit")

# # Check if user has submitted data
# if submit_button and pdf_file:
#     # Save the PDF content to a temporary file
#     with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
#         temp_pdf.write(pdf_file.read())

#     # Perform PDF text extraction
#     pdf_content = ""
#     pdf_reader = fitz.open(temp_pdf.name)
#     for page_number in range(pdf_reader.page_count):
#         page = pdf_reader[page_number]
#         pdf_content += page.get_text()

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
#     Also tell how they can save for thier retirement.
#     Let's start!!!
#     '''

#     # Create langchain messages
#     messages = [SystemMessage(content=prompt), HumanMessage(content=pdf_content)]

#     # Perform chat-based financial analysis
#     output = chat(messages)

#     # Display the analysis output as plain text
#     st.subheader("Financial Analysis Result:")
#     st.text(str(output.content))

#     # Remove the temporary file
#     temp_pdf.close()

import streamlit as st
import fitz
import tempfile
from langchain.llms import GooglePalm
from langchain.chat_models import ChatGooglePalm
from langchain.schema import AIMessage, HumanMessage, SystemMessage


st.set_page_config(page_title="FINANCE GUIDE GENERATIVE BOT", page_icon=":books:", layout="wide", initial_sidebar_state="expanded")

st.markdown(
    """
    <style>
        .result-section {
            background-color: black;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;  /* Add margin for better spacing */
        }
    </style>
    """,
    unsafe_allow_html=True
)


# Display a text heading
st.title("Welcome to the Finance Guide Generative Bot")

# Additional text content
st.write("This is a Streamlit app for generating finance-related content.")

# Add a file uploader for PDF files
pdf_file = st.file_uploader("Upload a PDF file", type=["pdf", "txt"])

# Add a submit button
submit_button = st.button("Submit")

# Check if the user has submitted data
if submit_button and pdf_file:
    # Save the PDF content to a temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
        temp_pdf.write(pdf_file.read())

    # Perform PDF text extraction
    pdf_content = ""
    pdf_reader = fitz.open(temp_pdf.name)
    for page_number in range(pdf_reader.page_count):
        page = pdf_reader[page_number]
        pdf_content += page.get_text()

    # Perform financial analysis using langchain
    api_key = 'AIzaSyByFoyQYuNDC9jsCwdNfs8_UhgmPNJWHJI'
    chat = ChatGooglePalm(google_api_key=api_key)

    # Replace the static prompt with your specific prompt
    prompt = '''
    You are a financial expert who is able to analyze one's personal monthly credit card statement, bank account statement, and cash
    expense log, and give a deep analysis on what went good, what went wrong, and recommend some actionable items to improve one's personal financial health.
    "analysis" consists of the in-depth analysis and statistics summary that is important for the user to know about their personal financial condition.
    "financial health" is the rating of one's financial condition based on the analysis provided.
    "recommendation" is the final recommendation that the advisor will give to the user so that they can improve their financial health in the upcoming month.
    Also, tell how they can save for their retirement. and never say that you should take financial advice from professionals as every one knows it.
    Let's start!!!
    '''

    # Create langchain messages
    messages = [SystemMessage(content=prompt), HumanMessage(content=pdf_content)]

    # Perform chat-based financial analysis
    output = chat(messages)

    # Display the analysis output with Markdown formatting
    st.subheader("Financial Analysis Result:")
    st.markdown(f"<div class='result-section'>{output.content}</div>", unsafe_allow_html=True)

    # Remove the temporary file
    temp_pdf.close()
 