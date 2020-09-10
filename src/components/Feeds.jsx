import React, { useState } from "react";
import Feed from "./Feed";
import { firestore, db } from "./../firebase";
import { useEffect } from "react";
import MyAnim from "./MyAnim";

const Feeds = () => {
  const [feeds, setFeeds] = useState(null);
  console.log(typeof feeds);
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
    // setUpFireStore();
    setUpRlDatabase();
    // getFirestoreData();
  }, []);

  const setUpRlDatabase = async () => {
    db.ref()
      .child("feeds")
      .on("value", (snapshot) => {
        const temp = [];
        snapshot.forEach((d) => {
          temp.push(d.val());
        });
        setFeeds(temp.reverse());
      });
  };

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

  if (!feeds) return <MyAnim />;
  return (
    <div>
      {feeds.map((item) => (
        <Feed item={item} />
      ))}
    </div>
  );
};

export default Feeds;
