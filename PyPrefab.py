import os;
print("Que tipo de Prefab quieres?");
print("[1] Basic Pag     [2] Basic PHP     [3] Complete PHP");
tipe_pag = input(">>> ");
os.system('mkdir pag');
if (tipe_pag == "1"):
    print("Creating Files..."); os.system('sleep 0.2');
    os.system('mv ~/PyPrefab/Basic/index.html ~/Desktop/pag/');
    os.system('mv ~/PyPrefab/Basic/styles.css ~/Desktop/pag/');
    os.system('mv ~/PyPrefab/Basic/scripts.js ~/Desktop/pag/');
    print("\n [+] Files Created.");
else :
    print("[!] Esa opcion no existe.");


