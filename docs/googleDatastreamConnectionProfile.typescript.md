# `googleDatastreamConnectionProfile` Submodule <a name="`googleDatastreamConnectionProfile` Submodule" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamConnectionProfile <a name="GoogleDatastreamConnectionProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile(scope: Construct, id: string, config: GoogleDatastreamConnectionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig">GoogleDatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig">GoogleDatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile">putBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity">putForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile">putGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile">putMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile">putOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile">putPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity">putPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile">putSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile">resetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation">resetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity">resetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile">resetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile">resetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile">resetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile">resetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity">resetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile">resetSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryProfile` <a name="putBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile"></a>

```typescript
public putBigqueryProfile(value: GoogleDatastreamConnectionProfileBigqueryProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `putForwardSshConnectivity` <a name="putForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity"></a>

```typescript
public putForwardSshConnectivity(value: GoogleDatastreamConnectionProfileForwardSshConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `putGcsProfile` <a name="putGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile"></a>

```typescript
public putGcsProfile(value: GoogleDatastreamConnectionProfileGcsProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `putMysqlProfile` <a name="putMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile"></a>

```typescript
public putMysqlProfile(value: GoogleDatastreamConnectionProfileMysqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `putOracleProfile` <a name="putOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile"></a>

```typescript
public putOracleProfile(value: GoogleDatastreamConnectionProfileOracleProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `putPostgresqlProfile` <a name="putPostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile"></a>

```typescript
public putPostgresqlProfile(value: GoogleDatastreamConnectionProfilePostgresqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `putPrivateConnectivity` <a name="putPrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity"></a>

```typescript
public putPrivateConnectivity(value: GoogleDatastreamConnectionProfilePrivateConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `putSqlServerProfile` <a name="putSqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile"></a>

```typescript
public putSqlServerProfile(value: GoogleDatastreamConnectionProfileSqlServerProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDatastreamConnectionProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---

##### `resetBigqueryProfile` <a name="resetBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile"></a>

```typescript
public resetBigqueryProfile(): void
```

##### `resetCreateWithoutValidation` <a name="resetCreateWithoutValidation" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```typescript
public resetCreateWithoutValidation(): void
```

##### `resetForwardSshConnectivity` <a name="resetForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```typescript
public resetForwardSshConnectivity(): void
```

##### `resetGcsProfile` <a name="resetGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile"></a>

```typescript
public resetGcsProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMysqlProfile` <a name="resetMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile"></a>

```typescript
public resetMysqlProfile(): void
```

##### `resetOracleProfile` <a name="resetOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile"></a>

```typescript
public resetOracleProfile(): void
```

##### `resetPostgresqlProfile` <a name="resetPostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile"></a>

```typescript
public resetPostgresqlProfile(): void
```

##### `resetPrivateConnectivity` <a name="resetPrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity"></a>

```typescript
public resetPrivateConnectivity(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSqlServerProfile` <a name="resetSqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile"></a>

```typescript
public resetSqlServerProfile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDatastreamConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput">bigqueryProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput">connectionProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput">createWithoutValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput">forwardSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput">gcsProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput">mysqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput">oracleProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput">postgresqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput">privateConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput">sqlServerProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryProfile`<sup>Required</sup> <a name="bigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: GoogleDatastreamConnectionProfileBigqueryProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `forwardSshConnectivity`<sup>Required</sup> <a name="forwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcsProfile`<sup>Required</sup> <a name="gcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: GoogleDatastreamConnectionProfileGcsProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mysqlProfile`<sup>Required</sup> <a name="mysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: GoogleDatastreamConnectionProfileMysqlProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oracleProfile`<sup>Required</sup> <a name="oracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: GoogleDatastreamConnectionProfileOracleProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresqlProfile`<sup>Required</sup> <a name="postgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `privateConnectivity`<sup>Required</sup> <a name="privateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `sqlServerProfile`<sup>Required</sup> <a name="sqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile"></a>

```typescript
public readonly sqlServerProfile: GoogleDatastreamConnectionProfileSqlServerProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatastreamConnectionProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigqueryProfileInput`<sup>Optional</sup> <a name="bigqueryProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```typescript
public readonly bigqueryProfileInput: GoogleDatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `connectionProfileIdInput`<sup>Optional</sup> <a name="connectionProfileIdInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```typescript
public readonly connectionProfileIdInput: string;
```

- *Type:* string

---

##### `createWithoutValidationInput`<sup>Optional</sup> <a name="createWithoutValidationInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```typescript
public readonly createWithoutValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `forwardSshConnectivityInput`<sup>Optional</sup> <a name="forwardSshConnectivityInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```typescript
public readonly forwardSshConnectivityInput: GoogleDatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcsProfileInput`<sup>Optional</sup> <a name="gcsProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput"></a>

```typescript
public readonly gcsProfileInput: GoogleDatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mysqlProfileInput`<sup>Optional</sup> <a name="mysqlProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput"></a>

```typescript
public readonly mysqlProfileInput: GoogleDatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `oracleProfileInput`<sup>Optional</sup> <a name="oracleProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput"></a>

```typescript
public readonly oracleProfileInput: GoogleDatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `postgresqlProfileInput`<sup>Optional</sup> <a name="postgresqlProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```typescript
public readonly postgresqlProfileInput: GoogleDatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `privateConnectivityInput`<sup>Optional</sup> <a name="privateConnectivityInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput"></a>

```typescript
public readonly privateConnectivityInput: GoogleDatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sqlServerProfileInput`<sup>Optional</sup> <a name="sqlServerProfileInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```typescript
public readonly sqlServerProfileInput: GoogleDatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDatastreamConnectionProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

---

##### `createWithoutValidation`<sup>Required</sup> <a name="createWithoutValidation" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamConnectionProfileBigqueryProfile <a name="GoogleDatastreamConnectionProfileBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileBigqueryProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile = { ... }
```


### GoogleDatastreamConnectionProfileConfig <a name="GoogleDatastreamConnectionProfileConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileConfig: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location">location</a></code> | <code>string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `bigqueryProfile`<sup>Optional</sup> <a name="bigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: GoogleDatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `createWithoutValidation`<sup>Optional</sup> <a name="createWithoutValidation" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#create_without_validation GoogleDatastreamConnectionProfile#create_without_validation}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcsProfile`<sup>Optional</sup> <a name="gcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: GoogleDatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `mysqlProfile`<sup>Optional</sup> <a name="mysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: GoogleDatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `oracleProfile`<sup>Optional</sup> <a name="oracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: GoogleDatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `postgresqlProfile`<sup>Optional</sup> <a name="postgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: GoogleDatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: GoogleDatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `sqlServerProfile`<sup>Optional</sup> <a name="sqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```typescript
public readonly sqlServerProfile: GoogleDatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#sql_server_profile GoogleDatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatastreamConnectionProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

### GoogleDatastreamConnectionProfileForwardSshConnectivity <a name="GoogleDatastreamConnectionProfileForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileForwardSshConnectivity: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>string</code> | SSH password. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>number</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey">privateKey</a></code> | <code>string</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

### GoogleDatastreamConnectionProfileGcsProfile <a name="GoogleDatastreamConnectionProfileGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileGcsProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath">rootPath</a></code> | <code>string</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

### GoogleDatastreamConnectionProfileMysqlProfile <a name="GoogleDatastreamConnectionProfileMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileMysqlProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>number</code> | Port for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfileMysqlProfileSslConfig <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileMysqlProfileSslConfig: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfileOracleProfile <a name="GoogleDatastreamConnectionProfileOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileOracleProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService">databaseService</a></code> | <code>string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | Connection string attributes. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>number</code> | Port for the Oracle connection. |

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `connectionAttributes`<sup>Optional</sup> <a name="connectionAttributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfilePostgresqlProfile <a name="GoogleDatastreamConnectionProfilePostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfilePostgresqlProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>number</code> | Port for the PostgreSQL connection. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfilePrivateConnectivity <a name="GoogleDatastreamConnectionProfilePrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfilePrivateConnectivity: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection">privateConnection</a></code> | <code>string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

### GoogleDatastreamConnectionProfileSqlServerProfile <a name="GoogleDatastreamConnectionProfileSqlServerProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileSqlServerProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database">database</a></code> | <code>string</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password">password</a></code> | <code>string</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username">username</a></code> | <code>string</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port">port</a></code> | <code>number</code> | Port for the SQL Server connection. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfileTimeouts <a name="GoogleDatastreamConnectionProfileTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

const googleDatastreamConnectionProfileTimeouts: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamConnectionProfileBigqueryProfileOutputReference <a name="GoogleDatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---


### GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---


### GoogleDatastreamConnectionProfileGcsProfileOutputReference <a name="GoogleDatastreamConnectionProfileGcsProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">resetRootPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootPath` <a name="resetRootPath" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```typescript
public resetRootPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">rootPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">rootPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `rootPathInput`<sup>Optional</sup> <a name="rootPathInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```typescript
public readonly rootPathInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `rootPath`<sup>Required</sup> <a name="rootPath" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: GoogleDatastreamConnectionProfileMysqlProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```typescript
public readonly caCertificateSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```typescript
public readonly clientCertificateSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```typescript
public readonly clientKeySet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileOracleProfileOutputReference <a name="GoogleDatastreamConnectionProfileOracleProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">resetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionAttributes` <a name="resetConnectionAttributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```typescript
public resetConnectionAttributes(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connectionAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">databaseServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">databaseService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionAttributesInput`<sup>Optional</sup> <a name="connectionAttributesInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```typescript
public readonly connectionAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseServiceInput`<sup>Optional</sup> <a name="databaseServiceInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```typescript
public readonly databaseServiceInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectionAttributes`<sup>Required</sup> <a name="connectionAttributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---


### GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference <a name="GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">privateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">privateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateConnectionInput`<sup>Optional</sup> <a name="privateConnectionInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```typescript
public readonly privateConnectionInput: string;
```

- *Type:* string

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---


### GoogleDatastreamConnectionProfileSqlServerProfileOutputReference <a name="GoogleDatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---


### GoogleDatastreamConnectionProfileTimeoutsOutputReference <a name="GoogleDatastreamConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktf/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatastreamConnectionProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---



