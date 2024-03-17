
import { BASE_URL } from './../config';

const URL = `${BASE_URL}/sale/send`

export const addSale = (new_Discount, setResp) => {
    fetch(`${BASE_URL}/sale/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(new_Discount)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }