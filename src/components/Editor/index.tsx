import React, { useRef, useEffect, useState, useCallback } from "react"
import Zdog, { Shape, Illustration, ShapeOptions, RectOptions } from "zdog"

type RenderShape = (illo: Illustration) => Shape

export const Editor = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [illustration, setIllustration] = useState<Illustration | null>(null)
  const [shapes, setShapes] = useState<Array<RenderShape>>([])

  const add = useCallback((primitive: typeof Shape, options: ShapeOptions | RectOptions) => () => {
    const shape: RenderShape = (illo: Illustration) => new primitive({
      addTo: illo,
      ...options,
    })
    setShapes(shapes.concat([shape]))
  }, [shapes, setShapes])

  useEffect(() => {
    if (canvas.current) {
      const illo = new Zdog.Illustration({
        // @ts-ignore
        element: canvas.current,
        dragRotate: true,
      })
      setIllustration(illo)
    
      new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        stroke: 20,
        color: '#636',
      })

      const animate = () => {
        illo.updateRenderGraph()
        requestAnimationFrame(animate)
      }
      animate()
    }
  }, [canvas, setIllustration])

  useEffect(() => {
    if (illustration) {
      shapes.forEach(shape => {
        shape(illustration)
      })
    }
  }, [illustration, shapes])

  return (
    <>
      <canvas ref={canvas} />
      <button onClick={
        add(Zdog.Rect, {
          translate: {
            z: 40,
          },
          width: 40,
          height: 40,
          stroke: 20,
          color: "#FDA",
        })
      }>Add Rect</button>
    </>
  )
}
