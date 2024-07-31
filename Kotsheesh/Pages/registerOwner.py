from tkinter import*
from subprocess import call
from tkinter import messagebox
import sqlite3

registerOwner = Tk()
genderReveal = IntVar()

with sqlite3.connect("information.db") as db:
    cursor = db.cursor()



cursor.execute(""" CREATE TABLE IF NOT EXISTS details(id integer PRIMARY KEY AUTOINCREMENT, lname text NOT NULL, fname text NOT NULL, mname text NOT NULL, suf text NOT NULL, age text NOT NULL, gender text NOT NULL, street text NOT NULL, city text NOT NULL, region text NOT NULL, zip text NOT NULL, country text NOT NULL, phone text NOT NULL, email text NOT NULL, vyear text NULL, vbrand text NULL, vmodel text NULL, vcolor text NULL, mileage text NULL, pnumber text NULL, vin text NULL)""")


        
def addOwner():
    genderDB = ""
    lastNameDB = lastName.get()
    firstNameDB = firstName.get()
    middleNameDB = middleName.get()
    suffixNameDB = suffixName.get()
    if suffixNameDB == "":
        suffixNameDB = "N/A"
    ageDB = ownerAge.get()
    genderRevealDB = genderReveal.get()
    if genderRevealDB == 1:
        genderDB = "Male"
    elif genderRevealDB == 2:
        genderDB = "Female"
    elif genderRevealDB == 3:
        genderDB = "Prefer Not to say"
    streetAddressDB = streetAddress.get()
    cityPlaceDB = cityPlace.get()
    regionPlaceDB = regionPlace.get()
    postalCodeDB = postalCode.get()
    countryDB = countryLocation.get()
    phoneNumberDB = phoneNumber.get()
    emailAddressDB = emailAddress.get()

    if lastNameDB == "" and firstNameDB == "" and middleNameDB == "" and ageDB == "" and streetAddressDB == "" and cityPlaceDB == "" and regionPlaceDB == "" and postalCodeDB == "" and countryDB == "" and phoneNumberDB == "" and emailAddressDB == "":
        messagebox.showerror("Error!", "Fill out all forms.")
    else:
        cursor.execute("INSERT INTO details(lname, fname, mname, suf, age, gender, street, city, region, zip, country, phone, email, vyear, vbrand, vmodel, vcolor, mileage, pnumber, vin)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (lastNameDB, firstNameDB, middleNameDB, suffixNameDB, ageDB, genderDB, streetAddressDB, cityPlaceDB, regionPlaceDB, postalCodeDB, countryDB, phoneNumberDB, emailAddressDB, "", "", "", "", "", "", ""))
        db.commit()
        registerOwner.destroy()
        call(["python", "/Pages/carRegister.py"])

def display_msg():
    terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
    if terminateGUI == True:
        registerOwner.destroy()

def backHome():
    backToHomepage = messagebox.askyesno("Warning", "Do you really want to go back? Your changes will be lost if you click 'Yes'")
    if backToHomepage == True:
        registerOwner.destroy()
        call(["python", "/Pages/Homepage.py"])



registerOwner.title("Owner Information")
registerOwner.geometry("1366x768")

registerBackground = PhotoImage(file = "/Graphic/ownerBG.png")
highlightReg = PhotoImage(file = "/Graphic/registrationIndicator.png")
arrowImage = PhotoImage(file="/Graphic/backArrow.png")

mainbackground = Canvas(registerOwner, bg="white", width=1366, height=768)
mainbackground.create_image(683,385, image = registerBackground)

arrowButton = Button(mainbackground, image=arrowImage, borderwidth=0, bg="white", command=backHome)
arrowButton.place(x = 20, y = 20)

quoteFont = ("Arial Black", 25, "bold")
mainbackground.create_text(260,460, text="The coming of your car signifies increase and a new level in your life. Best wishes!", font=quoteFont, fill="white", width=437)

createFont = ("Arial Black", 18, "bold")
regFonts = ("Calibri", 11, "bold")
inputFonts = ("Yu Gothic Light", 14)

mainbackground.create_text(725,25, text="CREATE AN ACCOUNT", font=createFont)

registrationFrame = Frame(mainbackground, width=764, height=700, highlightbackground = "#042698", highlightthickness = 5, bd=0)
registrationFrame.place(x = 577, y = 50)

indicatorImg = Label(mainbackground, image=highlightReg, bg="#042698")
indicatorImg.place(x = 577, y = 52)

fullname = Label(mainbackground, text="Full Name", font=regFonts)
fullname.place(x = 598, y = 115)

lastnameText = Label(mainbackground, text="Last Name", font=regFonts)
lastnameText.place(x = 598, y = 135)
lastName = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=14, borderwidth=2)
lastName.place(x = 598, y = 160)

firstnameText = Label(mainbackground, text="First Name", font=regFonts)
firstnameText.place(x = 753, y = 135)
firstName = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=17, borderwidth=2)
firstName.place(x = 753, y = 160)

middleText = Label(mainbackground, text="Middle Name", font=regFonts)
middleText.place(x = 938, y = 135)
middleName = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=14, borderwidth=2)
middleName.place(x = 938, y = 160)

suffixText = Label(mainbackground, text="Suffix", font=regFonts)
suffixText.place(x = 1093, y = 135)
suffixName = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=5, borderwidth=2)
suffixName.place(x = 1093, y = 160)

ageText = Label(mainbackground, text="Age", font=regFonts)
ageText.place(x = 1158, y = 135)
ownerAge = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=5, borderwidth=2)
ownerAge.place(x = 1158, y = 160)

genderText = Label(mainbackground, text="Gender", font=regFonts)
genderText.place(x = 1220, y = 135)
maleButton = Radiobutton(mainbackground, text="Male",  variable=genderReveal, value = 1, font="Calibri 10 bold", width=5)
maleButton.place(x = 1220, y = 170, anchor=W)
femaleButton = Radiobutton(mainbackground, text="Female",  variable=genderReveal, value = 2, font="Calibri 10 bold", width=5)
femaleButton.place(x = 1226, y = 190, anchor=W)
preferNot = Radiobutton(mainbackground, text="Prefer not to say",  variable=genderReveal, value = 3, font="Calibri 9 bold", width=12)
preferNot.place(x = 1229, y = 210, anchor=W)


addressText = Label(mainbackground, text="Address", font=regFonts)
addressText.place(x = 598, y = 210)
streetaddressText = Label(mainbackground, text="Street Address", font=regFonts)
streetaddressText.place(x = 598, y = 230)
streetAddress = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=71, borderwidth=2)
streetAddress.place(x = 598, y = 260)

cityText = Label(mainbackground, text="City", font=regFonts)
cityText.place(x = 598, y = 300)
cityPlace = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=34, borderwidth=2)
cityPlace.place(x = 598, y = 330)

regionText = Label(mainbackground, text="Region", font=regFonts)
regionText.place(x = 955, y = 300)
regionPlace = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=35, borderwidth=2)
regionPlace.place(x = 955, y = 330)

zipText = Label(mainbackground, text="Postal / Zip Code", font=regFonts)
zipText.place(x = 598, y = 370)
postalCode = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=34, borderwidth=2)
postalCode.place(x = 598, y = 400)

countryText = Label(mainbackground, text="Country", font=regFonts)
countryText.place(x = 955, y = 370)
countryLocation = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=35, borderwidth=2)
countryLocation.place(x = 955, y = 400)

phoneText = Label(mainbackground, text="Phone Number", font=regFonts)
phoneText.place(x=598, y = 440)
phoneNumber = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=71, borderwidth=2)
phoneNumber.place(x=598, y =470)

emailText = Label(mainbackground, text="Email", font=regFonts)
emailText.place(x=598, y = 510)
emailAddress = Entry(mainbackground, highlightthickness=2, highlightcolor="black", highlightbackground="#042698", bd = 0, font = inputFonts, width=71, borderwidth=2)
emailAddress.place(x=598, y = 540)

nextFrame = Frame(mainbackground, width=197, height = 50, highlightbackground = "black", highlightthickness = 4, bd=0)
nextFrame.place(x = 1100, y = 670)
nextBtn = Button(mainbackground, text="NEXT", fg="white", bg = "#042698", font="Gill 15 bold", width=15, borderwidth=2, command = addOwner)
nextBtn.place(x = 1103, y = 674)

mainbackground.place(relx = 0.5, rely = 0.5, anchor=CENTER)

registerOwner.protocol('WM_DELETE_WINDOW', display_msg)
registerOwner.mainloop()