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
