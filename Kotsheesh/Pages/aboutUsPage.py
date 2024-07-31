from tkinter import*
from subprocess import call
from tkinter import messagebox


aboutPage = Tk()

def backButton():
    answer = messagebox.askyesno("Warning", "Do you want to go back to homepage?")
    print(answer)
    if answer == True:
        aboutPage.destroy()
        call(["python", "/Pages/Homepage.py"])

def display_msg():
    terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
    if terminateGUI == True:
        aboutPage.destroy()
        

aboutPage.title("About Us")
aboutPage.geometry("1366x768")

aboutBackground = PhotoImage(file = "/Graphic/aboutUsBG.png")
aboutUsLogo = PhotoImage(file = "/Graphic/aboutUsLogo.png")

backgroundCars = Canvas(aboutPage, bg='white', width=1366, height=768)
backgroundCars.create_image(683,385, image = aboutBackground)

backgroundCars.create_image(105,450, image = aboutUsLogo, anchor = NW)
overviewFont = ("Arial Black", 20)
backgroundCars.create_text(120, 90, text = "Overview", font=overviewFont, fill='white')
backgroundCars.create_text(400, 170, text = "Kotsheesh Car Registration is a superior automobile registration insurance interface based in Pampanga, Philippines and founded in 2022 for the purpose of registering cars within its grasps.", font=('Calibri 19'), fill='white', width=700)
masterFont = ("Arial Black", 20)
backgroundCars.create_text(950, 460, text = "M A S T E R M I N D  B E H I N D  K O T S H E E S H", font=masterFont, fill="#042698")
backgroundCars.create_text(870, 580, text = "The group consists of 8 members, namely, Willien Wyeth Banzil, Mark Angelo Crisostomo, Gerald Cudia, Shanler Kyle De Guzman, Axel Klaude Delgado, Joseph Lemuel Macapagal, Lance Bradley Tienzo, and Melvin Andrew Toledo , who operates to give the user the best experience that they deserve. The group is also open for innovation  and ingenuity from interested individuals to further push the scope and limitations of the said project. \n\nThis interface is for the partial fulfillment of the requirements for Elective Course 1. ", font=('Calibri 15'), width=920, justify=RIGHT)

backgroundCars.create_text(220,690, text="M A K E  E V E R Y  R I D E  C O U N T S", font="Gill 10 bold")



backFrame = Frame(backgroundCars, width=197, height = 50, highlightbackground = "black", highlightthickness = 4, bd=0)
backFrame.place(x = 1100, y = 690)
backAbout = Button(backgroundCars, text="BACK", fg="white", bg = "#042698", font="Gill 15 bold", width=15, borderwidth=2, command = backButton)
backAbout.place(x = 1103, y = 694)

backgroundCars.place(relx = 0.5, rely = 0.5, anchor=CENTER)
aboutPage.protocol('WM_DELETE_WINDOW', display_msg)
aboutPage.mainloop()