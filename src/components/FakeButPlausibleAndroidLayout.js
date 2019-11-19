import React from 'react'
import Highlight from 'react-highlight.js'

const AndroidishLayout = () => {
  const test = `
    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="4dp"
        android:orientation="horizontal">

        <ImageView
            android:id="@+id/imageViewTipoProduto"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="16dp"
            android:layout_marginStart="16dp"
            android:layout_marginTop="8dp"
            app:srcCompat="@drawable/localize-logo" />

        <TextView
            android:id="@+id/textViewTipoProduto"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="22dp"
            android:layout_marginLeft="8dp"
            android:layout_marginStart="8dp"
            android:layout_marginTop="4dp"
            android:fontFamily="sans-serif-light"
            android:letterSpacing="0.04"

            android:textColor="#ffffff"
            android:textSize="14sp"
            android:textStyle="normal" />

        <TextView
            android:id="@+id/textViewTipoProduto"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="22dp"
            android:layout_marginLeft="8dp"
            android:layout_marginStart="8dp"
            android:layout_marginTop="4dp"
            android:fontFamily="sans-serif-light"
            android:letterSpacing="0.04"
            android:text="@string/kit_de_produtos"
            android:textColor="#ffffff"
            android:textSize="14sp"
            android:textStyle="normal" />
    </LinearLayout>
  `

  return (
    <Highlight>
      { test }
    </Highlight>
  )
}

export default React.memo(AndroidishLayout)
