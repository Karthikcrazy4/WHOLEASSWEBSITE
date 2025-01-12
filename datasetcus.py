from turtle import st
import pandas as pd 
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

st.set_page_config(page_title='Customer Dataset', page_icon='📊', layout='wide')

df = pd.read_excel(
    io='X_test_output.xlsx'
    engine='openpyxl'
    sheet_name='customerdb'
    skiprows=3;
    usecols='B:R'
    nrows=1000
)
st.dataframe(df)