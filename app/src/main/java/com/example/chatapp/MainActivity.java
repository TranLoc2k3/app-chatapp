package com.example.chatapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;

import com.example.chatapp.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    private static final int MENUTINNHAN_ID = R.id.menutinnhan;
    private static final int MENUDANHBA_ID = R.id.menudanhba;
    private static final int MENUKHAMPHA_ID = R.id.menukhampha;
    private static final int MENUNHATKY_ID = R.id.menunhatky;
    private static final int MENUCANHAN_ID = R.id.menucanhan;

    ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        replaceFragment(new FrmChat());

        binding.bottomNavigationView.setOnItemSelectedListener(item -> {
            int itemId = item.getItemId();
            if (itemId == MENUTINNHAN_ID) {
                replaceFragment(new FrmChat());
            } else if (itemId == MENUDANHBA_ID) {
                replaceFragment(new FrmContacts());
            } else if (itemId == MENUKHAMPHA_ID) {
                replaceFragment(new FrmDiscover());
            } else if (itemId == MENUNHATKY_ID) {
                replaceFragment(new FrmStory());
            } else if (itemId == MENUCANHAN_ID) {
                replaceFragment(new FrmAccount());
            }
            return true;
        });
    }


    private void replaceFragment(Fragment fragment) {
        FragmentManager manager = getSupportFragmentManager();
        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
        transaction.replace(R.id.fragment_container, fragment);
        transaction.commit();
    }
}
