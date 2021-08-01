import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function useSearch(keyword) {
  const [search, setSearch] = useState(keyword)
  const firstRender = useRef(true)
  const dispatch = useDispatch()
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    dispatch({
      type: 'suggestion/search/request',
      payload: search
    })
  }, [search, dispatch])

  return [search, setSearch]
}
