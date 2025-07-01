const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=CHINMAY&g=ChinmayBansal010&x=ChinmayB010&l=xenoryx&i=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1842578615663562752%2Fp42TMizR_400x400.jpg&p=&z=4ff18";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
