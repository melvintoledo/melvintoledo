from tkinter import*
from tkinter import messagebox
import sqlite3
from subprocess import call
import ownerSummarize

mainDirectory = Tk()
mainDirectory.geometry("1366x768")

with sqlite3.connect("information.db") as db:
    cursor = db.cursor()

selectAll = """SELECT * from details"""

cursor.execute("SELECT MAX(id) from details")
result = cursor.fetchone()
integerID = str(result[0])

def okBtn():
    messagebox.showinfo(title="Confirmation",message="Succesfully Inserted!")
    ownerSummarize.destroy()
    call(["python", "/Pages/Homepage.py"])

def display_msg():
    terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
    if terminateGUI == True:
        mainDirectory.destroy()

def backHome():
    terminateGUI = messagebox.askyesno("Warning", "Do you want to go back to Homepage?")
    if terminateGUI == True:
        mainDirectory.destroy()
        call(["python", "/Pages/Homepage.py"]) 
cursor.execute(selectAll)
allValues = cursor.fetchall()

iconSample = PhotoImage(file = "/Graphic/sampleIcon.png")
directBg = PhotoImage(file = "/Graphic/bgDirectory.png")


if integerID != "None":
    print(integerID)
    directoryCanvas = Canvas(mainDirectory)
    directoryCanvas.create_image(683,385, image = directBg)
    titleFont = ("Arial black", 23,"bold")
    directoryCanvas.create_text(160,29, text="DIRECTORY",font=titleFont)
    backBtn = Button(directoryCanvas, text = "BACK", font="Arial 14 bold", borderwidth=2,width=13, command=backHome)
    backBtn.place(x= 1140 , y = 726)
    directoryFrame = Frame(directoryCanvas, width=1266, height=668, bg="#b1d4e0")
    directoryFrame.place(x=50, y = 50)

    frameScrollbar = Scrollbar(directoryFrame, orient=VERTICAL)
    frameScrollbar.pack(side = RIGHT, fill = Y )

    frameCanvas = Canvas(directoryFrame, width=1266, height=668, bg="#b1d4e0", yscrollcommand= frameScrollbar.set, scrollregion=(0,0,(int(integerID)*200),(int(integerID)*200)))
    frameCanvas.pack(fill="both", expand=TRUE)
    labelFonts = ("Times new roman", 10)

    xcurrentClient = xdefaultClient = 220
    ycurrentClient = 180
    xcurrentName = xdefaultName = 260
    ycurrentName = 285
    for chooseClient in range(int(integerID)):
        if (chooseClient) % 3 == 0:
            ycurrentClient += 350
            ycurrentName += 350
            xcurrentClient = xdefaultClient
            xcurrentName = xdefaultName
        fullname = ""+ allValues[chooseClient][1]+", "+ allValues[chooseClient][2] +" "+ allValues[chooseClient][3] +""
        clientButton = Button(directoryFrame, image = iconSample, font = labelFonts, bg="#b1d4e0", borderwidth=0,command = lambda argss = allValues[chooseClient][0]: adminChoice(argss))
        frameCanvas.create_window(xcurrentClient, ycurrentClient - 350, window = clientButton)
        fullnameFirst = Button(directoryFrame, text=fullname, font = labelFonts, bg="#b1d4e0", width = 31, borderwidth=0,command = lambda argss = allValues[chooseClient][0]: adminChoice(argss))
        frameCanvas.create_window(xcurrentName, ycurrentName - 350, window = fullnameFirst)

        xcurrentName += 410
        xcurrentClient += 410
        

    def adminChoice(choseID):

        def display_msg():
            terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
            if terminateGUI == True:
                ownerSummarize.destroy()
        def okBtn():
            messagebox.showinfo(title="Confirmation",message="Succesfully Inserted!")
            ownerSummarize.destroy()
            
        mainDirectory.destroy()
        ownerID = choseID
        inputFonts = ("Yu Gothic Light", 16)
        addFnt = ("Yu Gothic Light", 12)
        ownerSummarize = Tk()
        ownerSummarize.title("Owner's Profile")
        ownerSummarize.geometry("1366x768")
        print(int(ownerID - 1))
        profileBG = PhotoImage(file = "/Graphic/ownerProfile.png")

        ownerBG = Canvas(ownerSummarize, width=1366, height=768)

        ownerBG.create_image(683,385, image = profileBG)
        fullName = ""+ allValues[int(ownerID - 1)][1]+", "+ allValues[int(ownerID - 1)][2] +" "+ allValues[int(ownerID - 1)][3] +""
        ownerBG.create_text(950,148, text = fullName, font=inputFonts)
        ownerAge = allValues[int(ownerID - 1)][5]
        ownerBG.create_text(740,198, text = ownerAge, font=inputFonts)

        genderReveal = allValues[int(ownerID - 1)][6]
        ownerBG.create_text(1130,198, text = genderReveal, font=inputFonts)

        completeAddress = ""+allValues[int(ownerID - 1)][7]+", "+allValues[int(ownerID - 1)][8]+", "+allValues[int(ownerID - 1)][9]+" ("+allValues[int(ownerID - 1)][10]+"), "+ allValues[int(ownerID - 1)][11]
        
        ownerBG.create_text(965,248, text = completeAddress, font=addFnt)

        phoneNum = allValues[int(ownerID - 1)][12]
        ownerBG.create_text(950,353, text = phoneNum, font=inputFonts)

        emailAdd = allValues[int(ownerID - 1)][13]
        ownerBG.create_text(950,301, text = emailAdd, font=inputFonts)


        vyearDp = allValues[int(ownerID - 1)][14]
        ownerBG.create_text(795,438, text = vyearDp, font=inputFonts)

        vbrandDp = allValues[int(ownerID - 1)][15]
        ownerBG.create_text(1160,438, text = vbrandDp, font=inputFonts)

        vmodelDp = allValues[int(ownerID - 1)][16]
        ownerBG.create_text(795,488, text = vmodelDp, font=inputFonts)

        vcolorDp = allValues[int(ownerID - 1)][17]
        ownerBG.create_text(1160,488, text = vcolorDp, font=inputFonts)

        mileageDp = allValues[int(ownerID - 1)][18]
        ownerBG.create_text(795,536, text = mileageDp, font=inputFonts)

        plateDp = allValues[int(ownerID - 1)][19]
        ownerBG.create_text(1160,536, text = plateDp, font=inputFonts)

        vinDP = allValues[int(ownerID - 1)][20]
        ownerBG.create_text(970,586, text = vinDP, font=inputFonts)
        nextFrame = Frame(ownerBG, width=197, height = 50, highlightbackground = "black", highlightthickness = 4, bd=0)
        nextFrame.place(x = 1050, y = 640)
        nextBtn = Button(ownerBG, text="OK", fg="white", bg = "#042698", font="Gill 15 bold", width=15, borderwidth=2, command= okBtn)
        nextBtn.place(x = 1053, y = 644)
        ownerBG.place(relx = 0.5, rely = 0.5, anchor=CENTER)
        ownerSummarize.protocol('WM_DELETE_WINDOW', display_msg)
        ownerSummarize.mainloop()
        call(["python", "/Pages/mainDirectory.py"])
    frameScrollbar.config(command = frameCanvas.yview )

    directoryCanvas.pack(fill="both", expand=TRUE)
else:
    mainDirectory.destroy()
    messagebox.showerror("Error", "No clients were added!")
    call(["python", "/Pages/Homepage.py"]) 

mainDirectory.protocol('WM_DELETE_WINDOW', display_msg)
mainDirectory.mainloop()