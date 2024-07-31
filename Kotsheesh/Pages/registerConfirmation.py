from tkinter import*
from tkinter import messagebox
import sqlite3
from subprocess import call

registerConfirmation = Tk()
registerConfirmation.geometry("1366x768")
registerConfirmation.title("Confirmation")


with sqlite3.connect("information.db") as db:
    cursor = db.cursor()

cursor.execute("SELECT MAX(id) from details")
result = cursor.fetchone()
integerID = str(result[0])

selectAll = """SELECT * from details where id = ?"""

cursor.execute(selectAll, integerID)
values = cursor.fetchone()


def finishProgram():
    messagebox.showinfo(title = "Confirm!", message="Account Successfully Registered!")
    registerConfirmation.destroy()
    call(["python", "/Pages/Homepage.py"])

def retryProgram():
    backToRegister = messagebox.askyesno("Warning", "Do you really want to go back? Your changes will be lost if you click 'Yes'")
    if backToRegister == True:
        registerConfirmation.destroy()
        call(["python", "/Pages/registerOwner.py"])

def fbLink():
    messagebox.showinfo("Facebook", "facebook.com/kotsheesh")
def igLink():
    messagebox.showinfo("Instagram", "instagram.com/@kotsheesh")
def twtLink():
    messagebox.showinfo("Twitter", "twitter.com/@kotsheesh")


confirmationBG = PhotoImage(file = "/Graphic/confirmBG.png")
buttonEdit = PhotoImage(file = "/Graphic/confirmEdit.png")
buttonSubmit = PhotoImage(file = "/Graphic/confirmSubmit.png")
fbLogo = PhotoImage(file = "/Graphic/fbLogo.png")
igLogo = PhotoImage(file = "/Graphic/igLogo.png")
twtLogo = PhotoImage(file = "/Graphic/twtLogo.png")

backgroundConfirm = Canvas(registerConfirmation, width=1366, height=1536)

backgroundFrame = Frame(backgroundConfirm, width=1366, height=1536)
backgroundFrame.place(x=0,y=0)

confirmSB = Scrollbar(registerConfirmation)
confirmSB.pack(side = RIGHT, fill = Y)

backgroundCanvas = Canvas(backgroundFrame, width=1366, height=1536, yscrollcommand= confirmSB.set, scrollregion=(0,0,2300,2300))
backgroundCanvas.create_image(0,388, image = confirmationBG, anchor = NW)

createFont = ("Arial Black", 22, "bold")
inputFonts = ("Yu Gothic Light", 16)

backgroundCanvas.create_text(300,520, text = "CONFIRM YOUR ACCOUNT", font=createFont)

fullName = ""+ values[1]+", "+ values[2] +" "+ values[3] +""
backgroundCanvas.create_text(350,694, text = fullName, font=inputFonts)
ownerAge = values[5]
backgroundCanvas.create_text(250,770, text = ownerAge, font=inputFonts)

genderReveal = values[6]
backgroundCanvas.create_text(650,770, text = genderReveal, font=inputFonts)

completeAddress = ""+values[7]+", "+values[8]+", "+values[9]+" ("+values[10]+"), "+ values[11]
  
backgroundCanvas.create_text(425,840, text = completeAddress, font=inputFonts)

phoneNum = values[12]
backgroundCanvas.create_text(275,915, text = phoneNum, font=inputFonts)

emailAdd = values[13]
backgroundCanvas.create_text(270,989, text = emailAdd, font=inputFonts)


vyearDp = values[14]
backgroundCanvas.create_text(270,1242, text = vyearDp, font=inputFonts)

vbrandDp = values[15]
backgroundCanvas.create_text(685,1242, text = vbrandDp, font=inputFonts)

vmodelDp = values[16]
backgroundCanvas.create_text(290,1332, text = vmodelDp, font=inputFonts)

vcolorDp = values[17]
backgroundCanvas.create_text(695,1332, text = vcolorDp, font=inputFonts)

mileageDp = values[18]
backgroundCanvas.create_text(288,1419, text = mileageDp, font=inputFonts)

plateDp = values[19]
backgroundCanvas.create_text(695,1419, text = plateDp, font=inputFonts)

vinDP = values[20]
backgroundCanvas.create_text(315,1519, text = vinDP, font=inputFonts)



textFonts = ("Calibri", 11, "bold")
backgroundCanvas.create_text(140,694, text = "Full Name: ", font = textFonts)
backgroundCanvas.create_text(140,770, text = "Age: ", font = textFonts)
backgroundCanvas.create_text(550,770, text = "Gender: ", font = textFonts)
backgroundCanvas.create_text(140,842, text = "Address: ", font = textFonts)
backgroundCanvas.create_text(140,915, text = "Phone \nNumber: ", font = textFonts)
backgroundCanvas.create_text(140,991, text = "Email: ", font = textFonts)


backgroundCanvas.create_text(160,1243, text = "Vehicle Year: ", font = textFonts)
backgroundCanvas.create_text(570,1243, text = "Vehicle Make: ", font = textFonts)
backgroundCanvas.create_text(160,1332, text = "Vehicle Model: ", font = textFonts)
backgroundCanvas.create_text(570,1332, text = "Vehicle Color: ", font = textFonts)
backgroundCanvas.create_text(160,1419, text = "Mileage: ", font = textFonts)
backgroundCanvas.create_text(570,1419, text = "Plate Number: ", font = textFonts)
backgroundCanvas.create_text(160,1515, text = "Vehicle \nIdentification \nNumber: ", font = textFonts)

editButton = Button(backgroundFrame, image = buttonEdit, bg="#668db8", borderwidth=0, command = retryProgram)
backgroundCanvas.create_window(360,1655, window=editButton)

submitButton = Button(backgroundFrame, image = buttonSubmit, bg="#668db8",borderwidth=0, command = finishProgram)
backgroundCanvas.create_window(560,1655, window=submitButton)

fbBtn = Button(backgroundFrame, image = fbLogo, bg="white",borderwidth=0, command = fbLink)
backgroundCanvas.create_window(960,1850, window=fbBtn)
igBtn = Button(backgroundFrame, image = igLogo, bg="white",borderwidth=0, command=igLink)
backgroundCanvas.create_window(1030,1850, window=igBtn)
twtBtn = Button(backgroundFrame, image = twtLogo, bg="white",borderwidth=0, comman = twtLink)
backgroundCanvas.create_window(1100,1850, window=twtBtn)

backgroundCanvas.create_text(260,1850, text = "© Webs. Kotsheesh. All Rights Reserved.", font = "Calibri 13")
kotFn = ("Arial black", 15, "bold")
backgroundCanvas.create_text(1230,1845, text = "@kotsheesh", font = kotFn)

backgroundCanvas.pack(fill="both", expand=TRUE)
confirmSB.config(command = backgroundCanvas.yview )
backgroundConfirm.place(relx = 0.5, rely = 0.5, anchor=CENTER)


registerConfirmation.mainloop()