import React, { useState } from "react";
import Feed from "./Feed";
import { firestore } from "./../firebase";
import { useEffect } from "react";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  const setUpFireStore = () => {
    firestore
      .collection("feeds")
      .orderBy("createdAt", "desc")
      .onSnapshot(
        ({ docs }) => {
          const temp = docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setFeeds(temp);
        },
        (error) => {
          console.log(error, "snp error");
        }
      );
  };

  useEffect(() => {
    setUpFireStore();
    // getFirestoreData();
  }, []);

  const getFirestoreData = async (params) => {
    try {
      const { docs } = await firestore.collection("feeds").get();
      const temp = docs.map((doc) => {
        return { id: doc.id, field: doc.data() };
      });
      setFeeds(temp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {feeds.map((item) => (
        <Feed item={item} />
      ))}
    </div>
  );
};

export default Feeds;
