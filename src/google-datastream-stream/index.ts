// https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDatastreamStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Desired state of the Stream. Set this field to 'RUNNING' to start the stream, and 'PAUSED' to pause the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#desired_state GoogleDatastreamStream#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#display_name GoogleDatastreamStream#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#id GoogleDatastreamStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#labels GoogleDatastreamStream#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this stream is located in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#location GoogleDatastreamStream#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#project GoogleDatastreamStream#project}
  */
  readonly project?: string;
  /**
  * The stream identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#stream_id GoogleDatastreamStream#stream_id}
  */
  readonly streamId: string;
  /**
  * backfill_all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#backfill_all GoogleDatastreamStream#backfill_all}
  */
  readonly backfillAll?: GoogleDatastreamStreamBackfillAll;
  /**
  * backfill_none block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#backfill_none GoogleDatastreamStream#backfill_none}
  */
  readonly backfillNone?: GoogleDatastreamStreamBackfillNone;
  /**
  * destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#destination_config GoogleDatastreamStream#destination_config}
  */
  readonly destinationConfig: GoogleDatastreamStreamDestinationConfig;
  /**
  * source_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#source_config GoogleDatastreamStream#source_config}
  */
  readonly sourceConfig: GoogleDatastreamStreamSourceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#timeouts GoogleDatastreamStream#timeouts}
  */
  readonly timeouts?: GoogleDatastreamStreamTimeouts;
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjects {
  /**
  * mysql_databases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAll {
  /**
  * mysql_excluded_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_excluded_objects GoogleDatastreamStream#mysql_excluded_objects}
  */
  readonly mysqlExcludedObjects?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects;
}

export function googleDatastreamStreamBackfillAllToTerraform(struct?: GoogleDatastreamStreamBackfillAllOutputReference | GoogleDatastreamStreamBackfillAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_excluded_objects: googleDatastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct!.mysqlExcludedObjects),
  }
}

export class GoogleDatastreamStreamBackfillAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlExcludedObjects = this._mysqlExcludedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlExcludedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlExcludedObjects.internalValue = value.mysqlExcludedObjects;
    }
  }

  // mysql_excluded_objects - computed: false, optional: true, required: false
  private _mysqlExcludedObjects = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference(this, "mysql_excluded_objects");
  public get mysqlExcludedObjects() {
    return this._mysqlExcludedObjects;
  }
  public putMysqlExcludedObjects(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects) {
    this._mysqlExcludedObjects.internalValue = value;
  }
  public resetMysqlExcludedObjects() {
    this._mysqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlExcludedObjectsInput() {
    return this._mysqlExcludedObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillNone {
}

export function googleDatastreamStreamBackfillNoneToTerraform(struct?: GoogleDatastreamStreamBackfillNoneOutputReference | GoogleDatastreamStreamBackfillNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleDatastreamStreamBackfillNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /**
  * Dataset ID in the format projects/{project}/datasets/{dataset_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#dataset_id GoogleDatastreamStream#dataset_id}
  */
  readonly datasetId: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  /**
  * If supplied, every created dataset will have its name prefixed by the provided value.
The prefix and name will be separated by an underscore. i.e. _.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#dataset_id_prefix GoogleDatastreamStream#dataset_id_prefix}
  */
  readonly datasetIdPrefix?: string;
  /**
  * The geographic location where the dataset should reside.
See https://cloud.google.com/bigquery/docs/locations for supported locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#location GoogleDatastreamStream#location}
  */
  readonly location: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id_prefix: cdktf.stringToTerraform(struct!.datasetIdPrefix),
    location: cdktf.stringToTerraform(struct!.location),
  }
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdPrefix = this._datasetIdPrefix;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetIdPrefix = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetIdPrefix = value.datasetIdPrefix;
      this._location = value.location;
    }
  }

  // dataset_id_prefix - computed: false, optional: true, required: false
  private _datasetIdPrefix?: string; 
  public get datasetIdPrefix() {
    return this.getStringAttribute('dataset_id_prefix');
  }
  public set datasetIdPrefix(value: string) {
    this._datasetIdPrefix = value;
  }
  public resetDatasetIdPrefix() {
    this._datasetIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdPrefixInput() {
    return this._datasetIdPrefix;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /**
  * dataset_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#dataset_template GoogleDatastreamStream#dataset_template}
  */
  readonly datasetTemplate: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_template: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct!.datasetTemplate),
  }
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetTemplate = this._datasetTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetTemplate.internalValue = value.datasetTemplate;
    }
  }

  // dataset_template - computed: false, optional: false, required: true
  private _datasetTemplate = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference(this, "dataset_template");
  public get datasetTemplate() {
    return this._datasetTemplate;
  }
  public putDatasetTemplate(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate) {
    this._datasetTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTemplateInput() {
    return this._datasetTemplate.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig {
  /**
  * The guaranteed data freshness (in seconds) when querying tables created by the stream.
Editing this field will only affect new tables created in the future, but existing tables
will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#data_freshness GoogleDatastreamStream#data_freshness}
  */
  readonly dataFreshness?: string;
  /**
  * single_target_dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#single_target_dataset GoogleDatastreamStream#single_target_dataset}
  */
  readonly singleTargetDataset?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;
  /**
  * source_hierarchy_datasets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#source_hierarchy_datasets GoogleDatastreamStream#source_hierarchy_datasets}
  */
  readonly sourceHierarchyDatasets?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_freshness: cdktf.stringToTerraform(struct!.dataFreshness),
    single_target_dataset: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct!.singleTargetDataset),
    source_hierarchy_datasets: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct!.sourceHierarchyDatasets),
  }
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFreshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshness = this._dataFreshness;
    }
    if (this._singleTargetDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleTargetDataset = this._singleTargetDataset?.internalValue;
    }
    if (this._sourceHierarchyDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHierarchyDatasets = this._sourceHierarchyDatasets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFreshness = undefined;
      this._singleTargetDataset.internalValue = undefined;
      this._sourceHierarchyDatasets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFreshness = value.dataFreshness;
      this._singleTargetDataset.internalValue = value.singleTargetDataset;
      this._sourceHierarchyDatasets.internalValue = value.sourceHierarchyDatasets;
    }
  }

  // data_freshness - computed: false, optional: true, required: false
  private _dataFreshness?: string; 
  public get dataFreshness() {
    return this.getStringAttribute('data_freshness');
  }
  public set dataFreshness(value: string) {
    this._dataFreshness = value;
  }
  public resetDataFreshness() {
    this._dataFreshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInput() {
    return this._dataFreshness;
  }

  // single_target_dataset - computed: false, optional: true, required: false
  private _singleTargetDataset = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference(this, "single_target_dataset");
  public get singleTargetDataset() {
    return this._singleTargetDataset;
  }
  public putSingleTargetDataset(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset) {
    this._singleTargetDataset.internalValue = value;
  }
  public resetSingleTargetDataset() {
    this._singleTargetDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleTargetDatasetInput() {
    return this._singleTargetDataset.internalValue;
  }

  // source_hierarchy_datasets - computed: false, optional: true, required: false
  private _sourceHierarchyDatasets = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference(this, "source_hierarchy_datasets");
  public get sourceHierarchyDatasets() {
    return this._sourceHierarchyDatasets;
  }
  public putSourceHierarchyDatasets(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets) {
    this._sourceHierarchyDatasets.internalValue = value;
  }
  public resetSourceHierarchyDatasets() {
    this._sourceHierarchyDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHierarchyDatasetsInput() {
    return this._sourceHierarchyDatasets.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat {
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /**
  * Compression of the loaded JSON file. Possible values: ["NO_COMPRESSION", "GZIP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#compression GoogleDatastreamStream#compression}
  */
  readonly compression?: string;
  /**
  * The schema file format along JSON data files. Possible values: ["NO_SCHEMA_FILE", "AVRO_SCHEMA_FILE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#schema_file_format GoogleDatastreamStream#schema_file_format}
  */
  readonly schemaFileFormat?: string;
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    schema_file_format: cdktf.stringToTerraform(struct!.schemaFileFormat),
  }
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._schemaFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFileFormat = this._schemaFileFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._schemaFileFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._schemaFileFormat = value.schemaFileFormat;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // schema_file_format - computed: false, optional: true, required: false
  private _schemaFileFormat?: string; 
  public get schemaFileFormat() {
    return this.getStringAttribute('schema_file_format');
  }
  public set schemaFileFormat(value: string) {
    this._schemaFileFormat = value;
  }
  public resetSchemaFileFormat() {
    this._schemaFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFileFormatInput() {
    return this._schemaFileFormat;
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfig {
  /**
  * The maximum duration for which new events are added before a file is closed and a new file is created.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#file_rotation_interval GoogleDatastreamStream#file_rotation_interval}
  */
  readonly fileRotationInterval?: string;
  /**
  * The maximum file size to be saved in the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#file_rotation_mb GoogleDatastreamStream#file_rotation_mb}
  */
  readonly fileRotationMb?: number;
  /**
  * Path inside the Cloud Storage bucket to write data to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#path GoogleDatastreamStream#path}
  */
  readonly path?: string;
  /**
  * avro_file_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#avro_file_format GoogleDatastreamStream#avro_file_format}
  */
  readonly avroFileFormat?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat;
  /**
  * json_file_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#json_file_format GoogleDatastreamStream#json_file_format}
  */
  readonly jsonFileFormat?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat;
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_rotation_interval: cdktf.stringToTerraform(struct!.fileRotationInterval),
    file_rotation_mb: cdktf.numberToTerraform(struct!.fileRotationMb),
    path: cdktf.stringToTerraform(struct!.path),
    avro_file_format: googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct!.avroFileFormat),
    json_file_format: googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct!.jsonFileFormat),
  }
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationInterval = this._fileRotationInterval;
    }
    if (this._fileRotationMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationMb = this._fileRotationMb;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._avroFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFileFormat = this._avroFileFormat?.internalValue;
    }
    if (this._jsonFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFileFormat = this._jsonFileFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileRotationInterval = undefined;
      this._fileRotationMb = undefined;
      this._path = undefined;
      this._avroFileFormat.internalValue = undefined;
      this._jsonFileFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileRotationInterval = value.fileRotationInterval;
      this._fileRotationMb = value.fileRotationMb;
      this._path = value.path;
      this._avroFileFormat.internalValue = value.avroFileFormat;
      this._jsonFileFormat.internalValue = value.jsonFileFormat;
    }
  }

  // file_rotation_interval - computed: true, optional: true, required: false
  private _fileRotationInterval?: string; 
  public get fileRotationInterval() {
    return this.getStringAttribute('file_rotation_interval');
  }
  public set fileRotationInterval(value: string) {
    this._fileRotationInterval = value;
  }
  public resetFileRotationInterval() {
    this._fileRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationIntervalInput() {
    return this._fileRotationInterval;
  }

  // file_rotation_mb - computed: true, optional: true, required: false
  private _fileRotationMb?: number; 
  public get fileRotationMb() {
    return this.getNumberAttribute('file_rotation_mb');
  }
  public set fileRotationMb(value: number) {
    this._fileRotationMb = value;
  }
  public resetFileRotationMb() {
    this._fileRotationMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationMbInput() {
    return this._fileRotationMb;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // avro_file_format - computed: false, optional: true, required: false
  private _avroFileFormat = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference(this, "avro_file_format");
  public get avroFileFormat() {
    return this._avroFileFormat;
  }
  public putAvroFileFormat(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat) {
    this._avroFileFormat.internalValue = value;
  }
  public resetAvroFileFormat() {
    this._avroFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFileFormatInput() {
    return this._avroFileFormat.internalValue;
  }

  // json_file_format - computed: false, optional: true, required: false
  private _jsonFileFormat = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference(this, "json_file_format");
  public get jsonFileFormat() {
    return this._jsonFileFormat;
  }
  public putJsonFileFormat(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat) {
    this._jsonFileFormat.internalValue = value;
  }
  public resetJsonFileFormat() {
    this._jsonFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFileFormatInput() {
    return this._jsonFileFormat.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfig {
  /**
  * Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#destination_connection_profile GoogleDatastreamStream#destination_connection_profile}
  */
  readonly destinationConnectionProfile: string;
  /**
  * bigquery_destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#bigquery_destination_config GoogleDatastreamStream#bigquery_destination_config}
  */
  readonly bigqueryDestinationConfig?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig;
  /**
  * gcs_destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#gcs_destination_config GoogleDatastreamStream#gcs_destination_config}
  */
  readonly gcsDestinationConfig?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig;
}

export function googleDatastreamStreamDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_connection_profile: cdktf.stringToTerraform(struct!.destinationConnectionProfile),
    bigquery_destination_config: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct!.bigqueryDestinationConfig),
    gcs_destination_config: googleDatastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct!.gcsDestinationConfig),
  }
}

export class GoogleDatastreamStreamDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectionProfile = this._destinationConnectionProfile;
    }
    if (this._bigqueryDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestinationConfig = this._bigqueryDestinationConfig?.internalValue;
    }
    if (this._gcsDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDestinationConfig = this._gcsDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationConnectionProfile = undefined;
      this._bigqueryDestinationConfig.internalValue = undefined;
      this._gcsDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationConnectionProfile = value.destinationConnectionProfile;
      this._bigqueryDestinationConfig.internalValue = value.bigqueryDestinationConfig;
      this._gcsDestinationConfig.internalValue = value.gcsDestinationConfig;
    }
  }

  // destination_connection_profile - computed: false, optional: false, required: true
  private _destinationConnectionProfile?: string; 
  public get destinationConnectionProfile() {
    return this.getStringAttribute('destination_connection_profile');
  }
  public set destinationConnectionProfile(value: string) {
    this._destinationConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectionProfileInput() {
    return this._destinationConnectionProfile;
  }

  // bigquery_destination_config - computed: false, optional: true, required: false
  private _bigqueryDestinationConfig = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference(this, "bigquery_destination_config");
  public get bigqueryDestinationConfig() {
    return this._bigqueryDestinationConfig;
  }
  public putBigqueryDestinationConfig(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig) {
    this._bigqueryDestinationConfig.internalValue = value;
  }
  public resetBigqueryDestinationConfig() {
    this._bigqueryDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationConfigInput() {
    return this._bigqueryDestinationConfig.internalValue;
  }

  // gcs_destination_config - computed: false, optional: true, required: false
  private _gcsDestinationConfig = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference(this, "gcs_destination_config");
  public get gcsDestinationConfig() {
    return this._gcsDestinationConfig;
  }
  public putGcsDestinationConfig(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig) {
    this._gcsDestinationConfig.internalValue = value;
  }
  public resetGcsDestinationConfig() {
    this._gcsDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDestinationConfigInput() {
    return this._gcsDestinationConfig.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects {
  /**
  * mysql_databases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects {
  /**
  * mysql_databases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfig {
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * exclude_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects;
  /**
  * include_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_cdc_tasks: cdktf.numberToTerraform(struct!.maxConcurrentCdcTasks),
    exclude_objects: googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentCdcTasks = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfig {
  /**
  * Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#source_connection_profile GoogleDatastreamStream#source_connection_profile}
  */
  readonly sourceConnectionProfile: string;
  /**
  * mysql_source_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#mysql_source_config GoogleDatastreamStream#mysql_source_config}
  */
  readonly mysqlSourceConfig: GoogleDatastreamStreamSourceConfigMysqlSourceConfig;
}

export function googleDatastreamStreamSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigOutputReference | GoogleDatastreamStreamSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_profile: cdktf.stringToTerraform(struct!.sourceConnectionProfile),
    mysql_source_config: googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct!.mysqlSourceConfig),
  }
}

export class GoogleDatastreamStreamSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProfile = this._sourceConnectionProfile;
    }
    if (this._mysqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSourceConfig = this._mysqlSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceConnectionProfile = undefined;
      this._mysqlSourceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceConnectionProfile = value.sourceConnectionProfile;
      this._mysqlSourceConfig.internalValue = value.mysqlSourceConfig;
    }
  }

  // source_connection_profile - computed: false, optional: false, required: true
  private _sourceConnectionProfile?: string; 
  public get sourceConnectionProfile() {
    return this.getStringAttribute('source_connection_profile');
  }
  public set sourceConnectionProfile(value: string) {
    this._sourceConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionProfileInput() {
    return this._sourceConnectionProfile;
  }

  // mysql_source_config - computed: false, optional: false, required: true
  private _mysqlSourceConfig = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference(this, "mysql_source_config");
  public get mysqlSourceConfig() {
    return this._mysqlSourceConfig;
  }
  public putMysqlSourceConfig(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfig) {
    this._mysqlSourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceConfigInput() {
    return this._mysqlSourceConfig.internalValue;
  }
}
export interface GoogleDatastreamStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#create GoogleDatastreamStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#delete GoogleDatastreamStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream#update GoogleDatastreamStream#update}
  */
  readonly update?: string;
}

export function googleDatastreamStreamTimeoutsToTerraform(struct?: GoogleDatastreamStreamTimeoutsOutputReference | GoogleDatastreamStreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GoogleDatastreamStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream google_datastream_stream}
*/
export class GoogleDatastreamStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_datastream_stream google_datastream_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDatastreamStreamConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDatastreamStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_stream',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.50.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._streamId = config.streamId;
    this._backfillAll.internalValue = config.backfillAll;
    this._backfillNone.internalValue = config.backfillNone;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._sourceConfig.internalValue = config.sourceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // backfill_all - computed: false, optional: true, required: false
  private _backfillAll = new GoogleDatastreamStreamBackfillAllOutputReference(this, "backfill_all");
  public get backfillAll() {
    return this._backfillAll;
  }
  public putBackfillAll(value: GoogleDatastreamStreamBackfillAll) {
    this._backfillAll.internalValue = value;
  }
  public resetBackfillAll() {
    this._backfillAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillAllInput() {
    return this._backfillAll.internalValue;
  }

  // backfill_none - computed: false, optional: true, required: false
  private _backfillNone = new GoogleDatastreamStreamBackfillNoneOutputReference(this, "backfill_none");
  public get backfillNone() {
    return this._backfillNone;
  }
  public putBackfillNone(value: GoogleDatastreamStreamBackfillNone) {
    this._backfillNone.internalValue = value;
  }
  public resetBackfillNone() {
    this._backfillNone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillNoneInput() {
    return this._backfillNone.internalValue;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new GoogleDatastreamStreamDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: GoogleDatastreamStreamDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // source_config - computed: false, optional: false, required: true
  private _sourceConfig = new GoogleDatastreamStreamSourceConfigOutputReference(this, "source_config");
  public get sourceConfig() {
    return this._sourceConfig;
  }
  public putSourceConfig(value: GoogleDatastreamStreamSourceConfig) {
    this._sourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigInput() {
    return this._sourceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDatastreamStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDatastreamStreamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desired_state: cdktf.stringToTerraform(this._desiredState),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      stream_id: cdktf.stringToTerraform(this._streamId),
      backfill_all: googleDatastreamStreamBackfillAllToTerraform(this._backfillAll.internalValue),
      backfill_none: googleDatastreamStreamBackfillNoneToTerraform(this._backfillNone.internalValue),
      destination_config: googleDatastreamStreamDestinationConfigToTerraform(this._destinationConfig.internalValue),
      source_config: googleDatastreamStreamSourceConfigToTerraform(this._sourceConfig.internalValue),
      timeouts: googleDatastreamStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
