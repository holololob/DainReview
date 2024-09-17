// lib/api.ts
export const fetchProductDetail = async (productId: string) => {
  const res = await fetch(
    `http://ec2-54-206-111-187.ap-southeast-2.compute.amazonaws.com:8080/api/campaign/${productId}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product details')
  }

  return res.json()
}

export const fetchCampaignList = async () => {
  const res = await fetch(
    'http://ec2-54-206-111-187.ap-southeast-2.compute.amazonaws.com:8080/api/campaign?category=%EB%A7%9B%EC%A7%91',
    {
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product list')
  }

  return res.json()
}
