import { dataCity } from "../../config/cities.js";
import { dataCountry } from "../../config/countries.js";
import { dataState } from "../../config/states.js";
import { languageList } from "../../config/languageList.js";

const getAll = async (req, res, next) => {
  try {
    const { country_code, state_code } = req.query;

    let dataList = [];
    if (country_code !== undefined && state_code === undefined) {
      let newArray = dataState.filter(function (data) {
        return data.country_code === country_code;
      });
      dataList = newArray;
    } else if (country_code !== undefined && state_code !== undefined) {
      let newArray = dataCity.filter(function (data) {
        return data.state_code === state_code && data.country_code === country_code;
      });
      dataList = newArray;

    } else {
      dataList = dataCountry;
    }

    if (!dataList) {
      throw new Error("Country list not found")
    }

    return res.status(200).json({ data: dataList });
  } catch (err) {
    next(error);
  }
};

const getLanguageList = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    
    if (keyword) {
      const filteredLanguages = languageList.filter(language =>
        language.language.toLowerCase().includes(keyword.toLowerCase())
      );
      res.json({ data: filteredLanguages });
    } else {
      res.json({ data: languageList });
    }

  } catch (error) {
    next(error)
  }
}


export default {
  getAll, getLanguageList
}