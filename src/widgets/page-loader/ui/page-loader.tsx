import { classNames } from "shared/lib/helpers/classnames"
import styles from "./page-loader.module.scss"
import { Loader } from "shared/ui/loader/loader"

export const PageLoader = () => {
    return (
        <div className={classNames(styles.pageLoader, {}, [])}>
            <Loader />
        </div>
    )
}