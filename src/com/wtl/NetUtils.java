package com.wtl;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class NetUtils {
	  /* ����״̬ */
    public static boolean isNet = true;
    public static enum netType
    {
        wifi, CMNET, CMWAP, noneNet
    }

    /**
     * @����˵��:�ж�WIFI�����Ƿ����
     * @��������:isWifiConnected
     * @param context
     * @return
     * @����ֵ:boolean
     */
    public static boolean isWifiConnected(Context context)
    {
        if (context != null)
        {
            ConnectivityManager mConnectivityManager = (ConnectivityManager) context
                    .getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo mWiFiNetworkInfo = mConnectivityManager
                    .getNetworkInfo(ConnectivityManager.TYPE_WIFI);
            if (mWiFiNetworkInfo != null)
            {
                return mWiFiNetworkInfo.isAvailable();
            }
        }
        return false;
    }

    /**
     * @����˵��:�ж�MOBILE�����Ƿ����
     * @��������:isMobileConnected
     * @param context
     * @return
     * @����ֵ:boolean
     */
    public static boolean isMobileConnected(Context context)
    {
        if (context != null)
        {
            ConnectivityManager mConnectivityManager = (ConnectivityManager) context
                    .getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo mMobileNetworkInfo = mConnectivityManager
                    .getNetworkInfo(ConnectivityManager.TYPE_MOBILE);
            if (mMobileNetworkInfo != null)
            {
                return mMobileNetworkInfo.isAvailable();
            }
        }
        return false;
    }

    /**
     * @����˵��:��ȡ��ǰ�������ӵ�������Ϣ
     * @��������:getConnectedType
     * @param context
     * @return
     * @����ֵ:int
     */
    public static int getConnectedType(Context context)
    {
        if (context != null)
        {
            ConnectivityManager mConnectivityManager = (ConnectivityManager) context
                    .getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo mNetworkInfo = mConnectivityManager
                    .getActiveNetworkInfo();
            if (mNetworkInfo != null && mNetworkInfo.isAvailable())
            {
                return mNetworkInfo.getType();
            }
        }
        return -1;
    }

    /**
     * @����˵��:��ȡ��ǰ������״̬ -1��û������ 1��WIFI����2��wap ����3��net����
     * @��������:getAPNType
     * @param context
     * @return
     * @����ֵ:netType
     */
    public static netType getAPNType(Context context)
    {
        ConnectivityManager connMgr = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = connMgr.getActiveNetworkInfo();
        if (networkInfo == null)
        {
            return netType.noneNet;
        }
        int nType = networkInfo.getType();

        if (nType == ConnectivityManager.TYPE_MOBILE)
        {
            if (networkInfo.getExtraInfo().toLowerCase().equals("cmnet"))
            {
                return netType.CMNET;
            }

            else
            {
                return netType.CMWAP;
            }
        } else if (nType == ConnectivityManager.TYPE_WIFI)
        {
            return netType.wifi;
        }
        return netType.noneNet;

    }

    /**
     * @����˵��:�ж��Ƿ�����������
     * @��������:isNetworkConnected
     * @param context
     * @return
     * @����ֵ:boolean
     */
    public static boolean isNetworkConnected(Context context) {
        if (context != null) {
            ConnectivityManager mConnectivityManager = (ConnectivityManager) context
                    .getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo mNetworkInfo = mConnectivityManager
                    .getActiveNetworkInfo();
            if (mNetworkInfo != null) {
                return mNetworkInfo.isAvailable();
            }
        }
        return false;
    }

    /**
     * @����˵��:�����Ƿ����
     * @��������:isNetworkAvailable
     * @param context
     * @return
     * @����ֵ:boolean
     */
    public static boolean isNetworkAvailable(Context context)
    {
        ConnectivityManager mgr = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo[] info = mgr.getAllNetworkInfo();
        if (info != null)
        {
            for (int i = 0; i < info.length; i++)
            {
                if (info[i].getState() == NetworkInfo.State.CONNECTED)
                {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * @����˵��:�ж��Ƿ����ֻ�����
     * @��������:is3GNet
     * @param context
     * @return
     * @����ֵ:boolean
     */
    public static boolean is3GNet(Context context) {
        ConnectivityManager connectivityManager = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetInfo = connectivityManager.getActiveNetworkInfo();
        if (activeNetInfo != null
                && activeNetInfo.getType() == ConnectivityManager.TYPE_MOBILE) {
            return true;
        }
        return false;
    }
    
}
