from tkinter import*
from subprocess import call
from tkinter import messagebox
import sqlite3

carRegister = Tk()
carRegister.geometry("1366x768")
carRegister.title("Car Registration")


with sqlite3.connect("information.db") as db:
    cursor = db.cursor()

cursor.execute("SELECT MAX(id) from details")
result = cursor.fetchone()
integerID = int(result[0])

def display_msg():
    terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
    if terminateGUI == True:
        carRegister.destroy()

def backHome():
    backToRegister = messagebox.askyesno("Warning", "Do you really want to go back? Your changes will be lost if you click 'Yes'")
    if backToRegister == True:
        carRegister.destroy()
        call(["python", "/Pages/registerOwner.py"])

def insertCar():
    vyearDB = vehicleYearInput.get()
    vbrandDB = vehicleModelInput.get()
    vmodelDB = vehicleBrandInput.get()
    vcolorDB = vehicleColorInput.get()
    mileageDB = mileageInput.get()
    pnumberDB = plateNumberInput.get()
    vinDB = vinInput.get()
    if vyearDB == "" and vbrandDB == "" and vmodelDB == "" and vcolorDB == "" and mileageDB == "" and pnumberDB == "" and vinDB == "":
        messagebox.showerror("Error!", "Fill out all forms.")
    else:
        insertCarUpdate = """Update details set vyear = ?, vbrand = ?, vmodel = ?, vcolor = ?, mileage = ?, pnumber = ?, vin = ? where id = ?"""
        data = (vyearDB, vbrandDB, vmodelDB, vcolorDB, mileageDB, pnumberDB, vinDB, integerID)
        cursor.execute(insertCarUpdate,data)
        db.commit()
        carRegister.destroy()
        call(["python", "/Pages/registerConfirmation.py"])

carBG = PhotoImage(file="/Graphic/carBG.png")
carIndicator = PhotoImage(file = "/Graphic/carRegistration.png")

carBackground = Canvas(carRegister, width=1366, height=768)
carBackground.create_image(683,385, image = carBG)
carBackground.place(relx = 0.5, rely = 0.5, anchor=CENTER)

quoteFont = ("Arial Black", 25, "bold")
carBackground.create_text(1090,460, text="You can't control the past, but you can control where you go next. - Kirsten Hubbord", font=quoteFont, fill="white", width=437, justify=RIGHT)

registrationFrame = Frame(carBackground, width=764, height=700, highlightbackground = "#042698", highlightthickness = 5, bd=0)
registrationFrame.place(x = 30, y = 50)

regFonts = ("Calibri", 11, "bold")
inputFonts = ("Yu Gothic Light", 16)
createFont = ("Arial Black", 18, "bold")

carBackground.create_text(200,25, text="CREATE AN ACCOUNT", font=createFont)

indicatorImg = Label(carBackground, image=carIndicator, bg="#042698")
indicatorImg.place(x = 30, y = 52)

vehicleYearText = Label(carBackground, text = "Vehicle Year", font=regFonts)
vehicleYearText.place(x = 50, y = 135)

vehicleYearInput = Entry(carBackground, font=inputFonts, width=31, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
vehicleYearInput.place(x = 50, y = 165)

vehicleBrandText = Label(carBackground, text = "Vehicle Brand", font=regFonts)
vehicleBrandText.place(x = 420, y = 135)

vehicleBrandInput = Entry(carBackground, font=inputFonts, width=31, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
vehicleBrandInput.place(x = 420, y = 165)

vehicleModelText = Label(carBackground, text = "Vehicle Model", font=regFonts)
vehicleModelText.place(x = 50, y = 225)

vehicleModelInput = Entry(carBackground, font=inputFonts, width=31, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
vehicleModelInput.place(x = 50, y = 255)

vehicleColorText = Label(carBackground, text = "Vehicle Color", font=regFonts)
vehicleColorText.place(x = 420, y = 225)

vehicleColorInput = Entry(carBackground, font=inputFonts, width=31, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
vehicleColorInput.place(x = 420, y = 255)

mileageText = Label(carBackground, text = "Mileage", font=regFonts)
mileageText.place(x = 50, y = 315)

mileageInput = Entry(carBackground, font=inputFonts, width=31, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
mileageInput.place(x = 50, y = 345)

plateNumberText = Label(carBackground, text = "Plate Number", font=regFonts)
plateNumberText.place(x = 420, y = 315)

plateNumberInput = Entry(carBackground, font=inputFonts, width=31, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
plateNumberInput.place(x = 420, y = 345)

vinText = Label(carBackground, text = "Vehicle Identification Number (VIN)", font=regFonts)
vinText.place(x = 50, y = 405)
vinInput = Entry(carBackground, font=inputFonts, width=65, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, borderwidth=2)
vinInput.place(x = 50, y = 435)

backFrame = Frame(carBackground, width=197, height = 50, highlightbackground = "black", highlightthickness = 4, bd=0)
backFrame.place(x = 70, y = 670)
backBtn = Button(carBackground, text="BACK", fg="white", bg = "#042698", font="Gill 15 bold", width=15, borderwidth=2, command=backHome)
backBtn.place(x = 73, y = 674)

nextFrame = Frame(carBackground, width=197, height = 50, highlightbackground = "black", highlightthickness = 4, bd=0)
nextFrame.place(x = 550, y = 670)
nextBtn = Button(carBackground, text="NEXT", fg="white", bg = "#042698", font="Gill 15 bold", width=15, borderwidth=2, command=insertCar)
nextBtn.place(x = 553, y = 674)

carRegister.protocol('WM_DELETE_WINDOW', display_msg)
carRegister.mainloop()
