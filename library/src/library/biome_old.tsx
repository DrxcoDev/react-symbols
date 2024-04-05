import type { ComponentProps, FC } from "react"

const Biome: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FBBF24"
      d="M18.49 13.274a4.29 4.29 0 00-.71-1.075c-.145-.136-.3-.264-.454-.396-.075-.066-.088-.132-.017-.194.383-.323.692-.724.907-1.177.167-.377.276-.778.322-1.189.025-.224.025-.45 0-.674-.047-.508-.1-.846-.159-1.014a5.47 5.47 0 00-.114-.4c-.485-1.243-1.6-2.08-2.322-2.512a6.096 6.096 0 00-.683-.273 7.194 7.194 0 00-1.233-.282A6.484 6.484 0 0013.092 4H5.043v3.679h7.825c.258 0 .515.03.766.088.335.07.622.212.78.537.06.163.092.334.097.507v.37a.869.869 0 01-.246.467c-.265.213-.595.33-.934.33-.6.045-1.204.01-1.807.018H5.043v9.997h3.679c.114 0 .132-.044.132-.146v-5.965c0-.321 0-.321.317-.321h3.96c.437-.02.871.074 1.26.273a.035.035 0 00.023 0l.128.119a1.277 1.277 0 01.335 1.4 1.242 1.242 0 01-.432.56 2.15 2.15 0 01-1.137.362c-.502.009-1.004 0-1.506 0-.128 0-.163.039-.163.158v3.252c0 .308 0 .322.312.308.669.019 1.338 0 2.005-.057a13.442 13.442 0 001.771-.353.568.568 0 00.031-.013 5.359 5.359 0 001.515-.789c.278-.19.52-.43.714-.704a.225.225 0 00.045-.045c.334-.423.577-.91.712-1.432.08-.304.143-.613.186-.925a4.173 4.173 0 00-.44-2.396v-.005z"
    ></path>
  </svg>
)

export default Biome
