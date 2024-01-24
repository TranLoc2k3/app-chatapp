package com.example.chatapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class FrmDangKySDT extends AppCompatActivity {

    private DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReferenceFromUrl("https://chatapp-3438b-default-rtdb.firebaseio.com/");
    private ImageButton imgbtnLuiLai;
    private Button btnTiepTuc;
    private EditText editTxtSdt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkysdt);

        btnTiepTuc = findViewById(R.id.btnTiepTuc);
        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        editTxtSdt = findViewById(R.id.editTxtSdt);

        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                navigateToDangKyHoTen();
            }
        });

        btnTiepTuc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleTiepTucButtonClick();
            }
        });
    }

    private void navigateToDangKyHoTen() {
        Intent intent = new Intent(FrmDangKySDT.this, FrmDangKyHoTen.class);
        startActivity(intent);
    }

    private void handleTiepTucButtonClick() {
        final String sdt = editTxtSdt.getText().toString().trim();

        if (sdt.isEmpty()) {
            Toast.makeText(FrmDangKySDT.this, "Vui lòng nhập số điện thoại", Toast.LENGTH_SHORT).show();
        } else {
            checkPhoneNumberExistence(sdt);
        }
    }

    private void checkPhoneNumberExistence(final String sdt) {
        databaseReference.child("User").addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                if (snapshot.child(sdt).exists()) {
                    Toast.makeText(FrmDangKySDT.this, "Số điện thoại đã được đăng ký", Toast.LENGTH_SHORT).show();
                } else {
                    savePhoneNumberToSharedPreferences(sdt);
                    navigateToDangKyKichHoatTaiKhoan();
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
                // Handle database error
            }
        });
    }

    private void savePhoneNumberToSharedPreferences(String sdt) {
        SharedPreferences sharedPreferences = getSharedPreferences("dataLogin", MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString("sdt", sdt);
        editor.apply();
    }

    private void navigateToDangKyKichHoatTaiKhoan() {
        Intent intent = new Intent(FrmDangKySDT.this, FrmDangKyKichHoatTaiKhoan.class);
        startActivity(intent);
    }
}