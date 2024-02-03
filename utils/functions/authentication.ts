import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, db } from "../../firebase";
import { displayNotification } from "./notification";
import { useRouter } from "next/router";
import { collection, query, where, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
import path from "path";
export async function signIn() {
    const provider = await new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage?.setItem("userId",user?.uid)
        localStorage?.setItem("userName",String(user?.displayName))
        localStorage?.setItem("photoUrl",String(user?.photoURL))
        console.log(result.user);
        verifyUser(user)
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.error(error);
        
        displayNotification("error","We encountered a problem in signing you in.",4000,"dark")
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  async function createUser(user:any) {
    const userObj = {
      userName: user?.displayName,
      phoneNumber: user?.phoneNumber,
      email: user?.email,
      coverPhoto: user?.photoURL,
      address: "",
      accessToken: user?.accessToken,
      createdAt: new Date(),
      userId: user?.uid,
    };
    await setDoc(doc(db, "users", `${user?.uid}`), userObj)
      .then((elem:any) => {
        window.location.href = "/dashboard?tab=profile"
      })
      .catch((err:any) => {
        console.error(err);
      });
  }

  export async function update(user:any, userId:string) {
    // await setDoc(doc(db, "users", `${user?.uid}`), userObj)
    //   .then((elem:any) => {
    //     window.location.href = "/dashboard?tab=profile"
    //   })
    //   .catch((err:any) => {
    //     console.error(err);
    //   });
    const userRef = doc(db, "users", `${userId}`);
    await updateDoc(userRef, {
      ...user
    }).then((elem:any) => {
      return elem
        })
        .catch((err:any) => {
          console.error(err);
        });
  }

  export async function verifyUser(user:any) {
    const itemsCollection = collection(db, "users");
    const q = query(
      itemsCollection,
      where("userId", "==", `${user?.uid}`)
    );
    const querySnapshot = await getDocs(q);
    let temp: any = [];
    querySnapshot.forEach((doc: any) => {
      temp.push(doc.data());
    });
    if(temp.length > 0) {
      window.location.href = "/dashboard?tab=profile"
    }else{
      createUser(user)
    }
  }

  export async function getUser(userId:any) {
    const itemsCollection = collection(db, "users");
    const q = query(
      itemsCollection,
      where("userId", "==", `${userId}`)
    );
    const querySnapshot = await getDocs(q);
    let temp: any = [];
    querySnapshot.forEach((doc: any) => {
      temp.push(doc.data());
    });
    return temp[0]
  }

  export async function getService(serviceId:any) {
    const itemsCollection = collection(db, "services");
    const q = query(
      itemsCollection,
      where("serviceId", "==", `${serviceId}`)
    );
    const querySnapshot = await getDocs(q);
    let temp: any = [];
    querySnapshot.forEach((doc: any) => {
      temp.push(doc.data());
    });
    return temp[0]
  }