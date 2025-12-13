import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  invertColors?: 'yes' | 'no'
  children: string
}

const Tag = ({ size = 'small', invertColors = 'no', children }: Props) => (
  <TagContainer invertColors={invertColors} size={size}>
    {children}
  </TagContainer>
)

export default Tag
