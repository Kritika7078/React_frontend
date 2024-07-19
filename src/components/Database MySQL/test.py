import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database = "mydatabase",
  port = 3308,  
)

mycursor = mydb.cursor()

#mycursor.execute("CREATE DATABASE mydatabase")
#mycursor.execute("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))")
#sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
#val = ("John", "Highway 21")
#mycursor.execute(sql, val)

#sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Highway 21'"
sql = "DELETE FROM customers WHERE address = 'Canyon 123'"

mycursor.execute(sql)

mydb.commit()
