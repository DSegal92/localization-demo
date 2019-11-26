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
            android:id="@+id/imageViewLocalizeHQLogo"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="16dp"
            android:layout_marginStart="16dp"
            android:layout_marginTop="8dp"
            app:srcCompat="@drawable/localize-logo" />

        <TextView
            android:id="@+id/localizeHQCompanyName"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="22dp"
            android:layout_marginLeft="8dp"
            android:layout_marginStart="8dp"
            android:layout_marginTop="4dp"
            android:fontFamily="sans-serif"
            android:letterSpacing="0.04"

            android:textColor="#000000"
            android:textSize="20sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/messageHeader"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="22dp"
            android:layout_marginLeft="8dp"
            android:layout_marginStart="8dp"
            android:layout_marginTop="4dp"
            android:fontFamily="sans-serif-light"
            android:letterSpacing="0.04"

            android:textColor="#000000"
            android:textSize="18sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/messageBody"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="22dp"
            android:layout_marginLeft="8dp"
            android:layout_marginStart="8dp"
            android:layout_marginTop="4dp"
            android:fontFamily="sans-serif-light"
            android:letterSpacing="0.04"

            android:textColor="#000000"
            android:textSize="14sp"
            android:textStyle="normal" />

        <TextView
            android:id="@+id/callToAction"
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
    </LinearLayout>
  `

  return (
    <Highlight>
      { test }
    </Highlight>
  )
}

export default React.memo(AndroidishLayout)
