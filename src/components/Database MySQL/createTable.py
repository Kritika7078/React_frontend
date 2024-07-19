import mysql.connector

config= mysql.connector.connect(
    host="localhost:",
    user="root",
    port="3308",
    password="",
    database="first"
    )
try:
    cur=config.cursor()
    cur.execute("CREATE TABLE table2(id INT AUTO_INCREMENT PRIMARY KEY,user VARCHAR(20),pwd VARCHAR(20),email VARCHAR(20)")
except mysql.connector.Error as err:
    print(f"Error: {err}")
