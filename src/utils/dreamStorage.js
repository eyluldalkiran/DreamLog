import AsyncStorage from "@react-native-async-storage/async-storage";

const DREAMS_KEY = "DREAMLOG_DREAMS";

export const getDreams = async () => {
  try {
    const json = await AsyncStorage.getItem(DREAMS_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error("Failed to load dreams", e);
    return [];
  }
};

export const saveDream = async (dream) => {
  try {
    const existing = await getDreams();
    const updated = [dream, ...existing]; // newest on top
    await AsyncStorage.setItem(DREAMS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save dream", e);
  }
};

export const clearDreams = async () => {
  await AsyncStorage.removeItem(DREAMS_KEY);
};

export const deleteDream = async (id) => {
  try {
    const existing = await getDreams();
    const filtered = existing.filter((d) => d.id !== id);
    await AsyncStorage.setItem(DREAMS_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error("Failed to delete dream", e);
  }
};
