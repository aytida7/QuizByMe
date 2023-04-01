import firestore from '@react-native-firebase/firestore';

export const createQuizFun = (DocId, title, description) => {
  return firestore().collection('quizbymeid').doc(DocId).set({
    title,
    description,
  });
};

export const createQuestionFun = (DocId, currentQuestionId, question) => {
  return firestore()
    .collection('quizbymeid')
    .doc(DocId)
    .collection('QNA')
    .doc(currentQuestionId)
    .set(question);
};

export const getQuizzes = () => {
  return firestore().collection('quizbymeid').get();
};
export const getQuizById = (currentQuizId) => {
  return firestore().collection('quizbymeid').doc(currentQuizId).get();
};
export const getQuestionsByQuizId = (currentQuizId) => {
  return firestore()
    .collection('quizbymeid')
    .doc(currentQuizId)
    .collection('QNA')
    .get();
};
