import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { issueType } from "@/types/issues";

export async function getIssues(userId: string) {
    const q = query(
        collection(db, "issues"),
        where("userId", "==", userId)
    );

    const querySnapshot = await getDocs(q);
    const issues: issueType[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data() as issueType;
        const { id, ...restData } = data;
        issues.push({
            id: doc.id,
            ...restData,
            createdAt: data.createdAt ,
        });
    });
    return issues;
}

export async function getIssueById(issueId: string) {
    const issueRef = doc(db, "issues", issueId);
    const issueSnap = await getDoc(issueRef);
    if (issueSnap.exists()) {
        const data = issueSnap.data() as issueType;
        const { id, ...restData } = data;
        return { id: issueSnap.id, ...restData };
    } else {
        throw new Error("Issue not found");
    }
}