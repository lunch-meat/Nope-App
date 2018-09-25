/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('onDeviceReady');
        var permissions = cordova.plugins.permissions;
        var permissionsList = [
          permissions.SEND_SMS,
          permissions.READ_PHONE_STATE,
          permissions.RECEIVE_SMS,
          permissions.RECEIVE_WAP_PUSH,
          permissions.RECEIVE_MMS,
          permissions.READ_SMS,
          permissions.WRITE_SMS
        ];
        permissions.requestPermission(
            permissionsList, 
            function() {
              if(SMSReceive) {
                  SMSReceive.startWatch(
                    function() {
                      console.log('watching started');
                    }, 
                    function() {
                      console.log('error');
                    });
              }
            }, 
            function(err) {
                console.log(err);
            });
        //this.receivedEvent('deviceready');
    },
};

app.initialize();