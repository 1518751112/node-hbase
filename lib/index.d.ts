// Type definitions for hbase 0.6.1
// Project: https://github.com/adaltas/node-hbase#readme
// Definitions by: Mihir Kurdekar <https://github.com/mihirkurdekar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Declaration file generated by dts-gen and edited further by reading Reference doc https://hbase.js.org/api/client/ */

import {RequestOptions} from "http";
import {Readable} from "stream";

export = hbase;

/**
 * Calling the hbase method return an initialized client object.
 * https://hbase.js.org/api/client/#grab-an-instance-of-hbaseclient
 * @param config
 */
declare function hbase(config: hbase.ClientConfig): hbase.Client;

/**
 * HBase client for Node.js using REST
 * https://hbase.js.org/
 */
declare namespace hbase {
    type CallbackType<T = any> = (err: Error, data: T, response?) => void;

    /**
     * krb5 options
     * https://hbase.js.org/api/client/#creating-a-new-client
     */
    interface KerberosOptions {
        principal: string;
        password?: string;
        keytab?: string;
        service_principal: string;
    }

    /**
     * A new instance of "HBase" may be instantiated with an object containing the following properties
     * https://hbase.js.org/api/client/#creating-a-new-client
     */
    interface ClientConfig extends RequestOptions {
        krb5?: KerberosOptions | any;
        encoding?: string;
    }


    /**
     * Client: server information and API entry point
     * https://hbase.js.org/api/client/#client-server-information-and-api-entry-point
     */
    class Client {
        options: ClientConfig;
        connection: Connection;

        /**
         * Constructor
         * https://hbase.js.org/api/client/#creating-a-new-client
         * @param options
         */
        constructor(options: ClientConfig);

        /**
         * Query the storage cluster status.
         * https://hbase.js.org/api/client/#api-clientstatus_cluster
         * @param callback
         */
        status_cluster(callback: CallbackType): void;

        /**
         * Return a new instance of "hbase.Table"
         * https://hbase.js.org/api/client/#api-clienttable
         * @param name
         */
        table(name: string): Table;

        /**
         * List of all non-system tables.
         * https://hbase.js.org/api/client/#api-clienttables
         * @param callback
         */
        tables(callback: CallbackType): void;
        /**
         * 获取命令空间列表
         * @param callback
         */
        spaces(callback: CallbackType): void;
        /**
         * 创建命令空间
         * @param name 命令空间名称
         * @param callback
         */
        createSpace(name:string,callback: CallbackType): void;
        /**
         * 获取命令空间信息
         * @param name 命令空间名称
         * @param callback
         */
        spaceInfo(name:string,callback: CallbackType): void;
        /**
         * 获取指定命令空间下的表列表
         * @param name 命令空间名称
         * @param callback
         */
        spaceTable(name:string,callback: CallbackType): void;
        /**
         * 移除命令空间 命名空间下不能有表
         * @param name 命令空间名称
         * @param callback
         */
        removeSpace(name:string,callback: CallbackType): void;

        /**
         * Query Software Version.
         * https://hbase.js.org/api/client/#api-version
         * @param callback
         */
        version(callback: CallbackType): void;

        /**
         * Query the storage cluster version.
         * https://hbase.js.org/api/client/#api-version_cluster
         * @param callback
         */
        version_cluster(callback: CallbackType): void;

    }

    /**
     * Connection: HTTP REST requests for HBase
     * https://hbase.js.org/api/connection/#connection-http-rest-requests-for-hbase
     */
    class Connection {
        client: Client;
        options: any;

        /**
         * Pass client to get new Connection
         * https://hbase.js.org/api/connection/#creating-a-new-connection
         * @param client
         */
        constructor(client: Client);

        /**
         * Execute an HTTP Delete request.
         * The callback contains 3 arguments:
         * the error object if any,
         * the decoded response body,
         * the Node http.ClientResponse object.
         * @param command
         * @param callback
         */
        delete(command: string, callback: CallbackType): void;

        /**
         * https://hbase.js.org/api/connection/#http-get-requests
         * Execute an HTTP Get request to hbase rest server.
         * The callback contains 3 arguments:
         * the error object if any,
         * the decoded response body,
         * the Node http.ClientResponse object.
         * @param command
         * @param callback
         */
        get(command: string, callback: CallbackType): void;

        /**
         * Private method used to process JSON
         * @param response
         * @param body
         */
        handleJson(response: any, body: any): void;

        /**
         * Internal method used to make API calls to hbase rest
         * @param method
         * @param command
         * @param data
         * @param callback
         */
        makeRequest(method: string, command: string, data: any, callback: CallbackType): void;

        /**
         * Execute an HTTP POST request to hbase rest server.
         * The callback contains 3 arguments:
         * the error object if any,
         * the decoded response body,
         * the Node http.ClientResponse object.
         * @param command
         * @param data
         * @param callback
         */
        post(command: string, data: any, callback: CallbackType): void;

        /**
         * Execute an HTTP PUT request to hbase rest server.
         * The callback contains 3 arguments:
         * the error object if any,
         * the decoded response body,
         * the Node http.ClientResponse object.
         * @param command
         * @param data
         * @param callback
         */
        put(command: string, data: any, callback: CallbackType): void;
    }

    /**
     * Row: CRUD operations on rows and columns
     * Row objects provide access and manipulation on colunns and rows.
     * Single and multiple operations are available and are documented below.
     * https://hbase.js.org/api/row/
     */
    class Row {
        client: Client;
        /**
         * @description correspond to Table.name
         */
        table: string;
        key: string;

        /**
         * Grab an instance of Row
         * https://hbase.js.org/api/row/#grab-an-instance-of-row
         * @param client
         * @param table
         * @param key
         */
        constructor(client: Client, table: Table, key: string);

        /**
         * Delete one or multiple rows or columns.
         * Column is optional and corresponds to a column family
         * optionally followed by a column name separated with a column (":").
         * Callback is required and receive two arguments,
         * an error object if any and
         * a boolean indicating whether the column exists or not.
         * https://hbase.js.org/api/row/#api-rowdelete
         * @param column
         * @param callback
         */
        delete(column: string, callback: CallbackType): void;
        delete(callback: CallbackType): void;

        /**
         * Test if a row or a column exists.
         * The column argument is optional and corresponds to a column family optionally followed by a column name separated with a colon character (":").
         * The callback argument is required and receives two arguments,
         * an error object if any
         * and a boolean value indicating whether the column exists or not.
         * https://hbase.js.org/api/row/#api-rowexists
         * @param column
         * @param callback
         */
        exists(column: string, callback: CallbackType): void;
        exists(callback: CallbackType): void;


        /**
         * Retrieve values from one or multiple rows.
         * Values from multiple rows is achieved by appending a suffix glob on the row key.
         * Note the new "key" property present in the returned objects.
         * https://hbase.js.org/api/row/#api-rowget
         * @param column
         * @param callback
         */
        get(column: string, callback: CallbackType): void;

        /**
         * Insert and update one or multiple column values.
         * Column is required and corresponds to a column family optionally followed by a column name separated with a column (":").
         * Callback is optional and receive two arguments,
         * an error object if any and
         * a boolean indicating whether the column was inserted/updated or not.
         * https://hbase.js.org/api/row/#api-rowput
         * @param columns
         * @param values
         * @param callback
         */
        put(columns: any, values: any, callback: CallbackType): void;

    }

    /**
     * Scanner options
     * https://hbase.js.org/api/scanner/#options
     */
    interface ScannerConfig {
        table: string;
        startRow?: number;
        endRow?: number;
        columns?: string;
        batch?: number;
        maxVersions?: number;
        startTime?: string | Date;
        endTime?: string | Date;
        filter?: any;
        encoding?: string;
    }

    /**
     * Scanner and filter operations:
     * Scanner are the most efficient way to retrieve multiple rows and columns from HBase.
     * For scalability reasons, this module implements internally the native Node.js Stream Readable API.
     * https://hbase.js.org/api/scanner/
     */
    class Scanner extends Readable {
        client: Client;
        options: ScannerConfig;

        /**
         * Grab an instance of "Scanner"
         * https://hbase.js.org/api/scanner/#grab-an-instance-of-scanner
         * @param client
         * @param options
         */
        constructor(client: Client, options: ScannerConfig);

        /**
         * Internal method to unregister the scanner from the HBase server.
         * The callback is optional and receives two arguments,
         * an error object if any and
         * a boolean indicating whether the scanner was removed or not.
         * https://hbase.js.org/api/scanner/#api-scannerdelete
         * @param callback
         */
        delete(callback: CallbackType<boolean>): void;

        /**
         * Internal method to retrieve a batch of records.
         * The method is expected to be called multiple time to get the next cells from HBase.
         * The callback is required and receive two arguments,
         * an error object if any and
         * a array of cells or null if the scanner is exhausted.
         * https://hbase.js.org/api/scanner/#api-scannerget
         * @param callback
         */
        get(callback: CallbackType): void;

        /**
         * Internal method to create a new scanner and retrieve its ID.
         * https://hbase.js.org/api/scanner/#options
         * @param callback
         */
        init(callback: CallbackType): any;

        /**
         * Implementation of the stream.Readable API.
         * https://hbase.js.org/api/scanner/#api-scanner_readsize
         * @param size
         */
        _read(size: number);
    }

    /**
     * Table operations: create, modify and delete HBase tables
     * https://hbase.js.org/api/table/
     */
    class Table {
        client: Client;
        name: string;

        /**
         * Grab an instance of "hbase.Table"
         * https://hbase.js.org/api/table/#grab-an-instance-of-hbasetable
         * @param client
         * @param name
         */
        constructor(client: Client, name: string);

        /**
         * Create a new table in HBase.
         * Callback is optional and receive two arguments,
         * an error object if any and
         * a boolean indicating whether the table was created or not.
         *
         * The simplest way is to grab a table object and call its create function with the schema as argument.
         * https://hbase.js.org/api/table/#api-tablecreate
         * @param schema
         * @param callback
         */
        create(schema?: any, callback?: CallbackType<boolean>): void;

        // create(schema: any, callback?: CallbackType<boolean>): void;
        // create(schema: any, callback: CallbackType<boolean>): void;

        /**
         * Drop an existing table.
         * The callback argument is optional and receives two arguments,
         * an error object if any and
         * a boolean value indicating whether the table was removed/disabled or not.
         * https://hbase.js.org/api/table/#api-tabledelete
         * @param callback
         */
        delete(callback: CallbackType<boolean>): void;

        /**
         * Check if a table is created.
         * https://hbase.js.org/api/table/#api-tableexists
         * @param callback
         */
        exists(callback: CallbackType<boolean>): void;

        /**
         * Retrieves the table region metadata
         * https://hbase.js.org/api/table/#api-tableregions
         * @param callback
         */
        regions(callback: CallbackType): void;

        /**
         * Return a new row instance.
         * https://hbase.js.org/api/table/#api-tablerow
         * @param key
         */
        row(key: string): Row;

        /**
         * Return a new scanner instance.
         * https://hbase.js.org/api/table/#api-tablescan
         * @param options
         * @param callback
         */
        scan(options?: Omit<ScannerConfig, 'table'>, callback?: CallbackType): Scanner;

        /**
         * Retrieves the table schema.
         * https://hbase.js.org/api/table/#api-tableschema
         * @param callback
         */
        schema(callback: CallbackType): void;

        /**
         * Update an existing table
         * https://hbase.js.org/api/table/#update-an-existing-table
         * @param schema
         * @param callback
         */
        update(schema: string, callback: CallbackType): void;

    }

    /**
     * Utility functions for internal use of library
     */
    namespace utils {
        function merge(...args: any[]): any;

        namespace base64 {
            // tslint:disable-next-line:variable-name
            function decode(data: Buffer | string, from_encoding: string): string;

            // tslint:disable-next-line:variable-name
            function encode(data: Buffer | string, to_encoding: string): string;

        }

        namespace url {
            function encode(args: {
                table: string;
                key: string;
                columns: [] | { key: any } | string;
                start: string;
                end: string;
                params: { key: any };
            }): string;

        }

    }

}
