# `googleBigqueryDataTransferConfig` Submodule <a name="`googleBigqueryDataTransferConfig` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataTransferConfig <a name="GoogleBigqueryDataTransferConfig" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config google_bigquery_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

new googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig(scope: Construct, id: string, config: GoogleBigqueryDataTransferConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig">GoogleBigqueryDataTransferConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig">GoogleBigqueryDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEmailPreferences">putEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putScheduleOptions">putScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putSensitiveParams">putSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDataRefreshWindowDays">resetDataRefreshWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDestinationDatasetId">resetDestinationDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEmailPreferences">resetEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetNotificationPubsubTopic">resetNotificationPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetScheduleOptions">resetScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSensitiveParams">resetSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetServiceAccountName">resetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailPreferences` <a name="putEmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEmailPreferences"></a>

```typescript
public putEmailPreferences(value: GoogleBigqueryDataTransferConfigEmailPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEmailPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: GoogleBigqueryDataTransferConfigEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

---

##### `putScheduleOptions` <a name="putScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putScheduleOptions"></a>

```typescript
public putScheduleOptions(value: GoogleBigqueryDataTransferConfigScheduleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putScheduleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

---

##### `putSensitiveParams` <a name="putSensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putSensitiveParams"></a>

```typescript
public putSensitiveParams(value: GoogleBigqueryDataTransferConfigSensitiveParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putSensitiveParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryDataTransferConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a>

---

##### `resetDataRefreshWindowDays` <a name="resetDataRefreshWindowDays" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDataRefreshWindowDays"></a>

```typescript
public resetDataRefreshWindowDays(): void
```

##### `resetDestinationDatasetId` <a name="resetDestinationDatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDestinationDatasetId"></a>

```typescript
public resetDestinationDatasetId(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEmailPreferences` <a name="resetEmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEmailPreferences"></a>

```typescript
public resetEmailPreferences(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNotificationPubsubTopic` <a name="resetNotificationPubsubTopic" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetNotificationPubsubTopic"></a>

```typescript
public resetNotificationPubsubTopic(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetScheduleOptions` <a name="resetScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetScheduleOptions"></a>

```typescript
public resetScheduleOptions(): void
```

##### `resetSensitiveParams` <a name="resetSensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetSensitiveParams"></a>

```typescript
public resetSensitiveParams(): void
```

##### `resetServiceAccountName` <a name="resetServiceAccountName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetServiceAccountName"></a>

```typescript
public resetServiceAccountName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryDataTransferConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference">GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference">GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference">GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference">GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference">GoogleBigqueryDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDaysInput">dataRefreshWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetIdInput">destinationDatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferencesInput">emailPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopicInput">notificationPubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptionsInput">scheduleOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParamsInput">sensitiveParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetId">destinationDatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailPreferences`<sup>Required</sup> <a name="emailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferences"></a>

```typescript
public readonly emailPreferences: GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference">GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference">GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheduleOptions`<sup>Required</sup> <a name="scheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptions"></a>

```typescript
public readonly scheduleOptions: GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference">GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference</a>

---

##### `sensitiveParams`<sup>Required</sup> <a name="sensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParams"></a>

```typescript
public readonly sensitiveParams: GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference">GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryDataTransferConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference">GoogleBigqueryDataTransferConfigTimeoutsOutputReference</a>

---

##### `dataRefreshWindowDaysInput`<sup>Optional</sup> <a name="dataRefreshWindowDaysInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDaysInput"></a>

```typescript
public readonly dataRefreshWindowDaysInput: number;
```

- *Type:* number

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `destinationDatasetIdInput`<sup>Optional</sup> <a name="destinationDatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetIdInput"></a>

```typescript
public readonly destinationDatasetIdInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailPreferencesInput`<sup>Optional</sup> <a name="emailPreferencesInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.emailPreferencesInput"></a>

```typescript
public readonly emailPreferencesInput: GoogleBigqueryDataTransferConfigEmailPreferences;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: GoogleBigqueryDataTransferConfigEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notificationPubsubTopicInput`<sup>Optional</sup> <a name="notificationPubsubTopicInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopicInput"></a>

```typescript
public readonly notificationPubsubTopicInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `scheduleOptionsInput`<sup>Optional</sup> <a name="scheduleOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.scheduleOptionsInput"></a>

```typescript
public readonly scheduleOptionsInput: GoogleBigqueryDataTransferConfigScheduleOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

---

##### `sensitiveParamsInput`<sup>Optional</sup> <a name="sensitiveParamsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.sensitiveParamsInput"></a>

```typescript
public readonly sensitiveParamsInput: GoogleBigqueryDataTransferConfigSensitiveParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountNameInput"></a>

```typescript
public readonly serviceAccountNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryDataTransferConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a>

---

##### `dataRefreshWindowDays`<sup>Required</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataRefreshWindowDays"></a>

```typescript
public readonly dataRefreshWindowDays: number;
```

- *Type:* number

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `destinationDatasetId`<sup>Required</sup> <a name="destinationDatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.destinationDatasetId"></a>

```typescript
public readonly destinationDatasetId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `notificationPubsubTopic`<sup>Required</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.notificationPubsubTopic"></a>

```typescript
public readonly notificationPubsubTopic: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDataTransferConfigConfig <a name="GoogleBigqueryDataTransferConfigConfig" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

const googleBigqueryDataTransferConfigConfig: googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>number</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.destinationDatasetId">destinationDatasetId</a></code> | <code>string</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#id GoogleBigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>string</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#project GoogleBigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.schedule">schedule</a></code> | <code>string</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | Service account email. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#data_source_id GoogleBigqueryDataTransferConfig#data_source_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#display_name GoogleBigqueryDataTransferConfig#display_name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#params GoogleBigqueryDataTransferConfig#params}

---

##### `dataRefreshWindowDays`<sup>Optional</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.dataRefreshWindowDays"></a>

```typescript
public readonly dataRefreshWindowDays: number;
```

- *Type:* number

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#data_refresh_window_days GoogleBigqueryDataTransferConfig#data_refresh_window_days}

---

##### `destinationDatasetId`<sup>Optional</sup> <a name="destinationDatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.destinationDatasetId"></a>

```typescript
public readonly destinationDatasetId: string;
```

- *Type:* string

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#destination_dataset_id GoogleBigqueryDataTransferConfig#destination_dataset_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#disabled GoogleBigqueryDataTransferConfig#disabled}

---

##### `emailPreferences`<sup>Optional</sup> <a name="emailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.emailPreferences"></a>

```typescript
public readonly emailPreferences: GoogleBigqueryDataTransferConfigEmailPreferences;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#email_preferences GoogleBigqueryDataTransferConfig#email_preferences}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: GoogleBigqueryDataTransferConfigEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#encryption_configuration GoogleBigqueryDataTransferConfig#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#id GoogleBigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#location GoogleBigqueryDataTransferConfig#location}

---

##### `notificationPubsubTopic`<sup>Optional</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.notificationPubsubTopic"></a>

```typescript
public readonly notificationPubsubTopic: string;
```

- *Type:* string

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#notification_pubsub_topic GoogleBigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#project GoogleBigqueryDataTransferConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: The minimum interval time between recurring transfers depends
on the data source; refer to the documentation for your data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#schedule GoogleBigqueryDataTransferConfig#schedule}

---

##### `scheduleOptions`<sup>Optional</sup> <a name="scheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.scheduleOptions"></a>

```typescript
public readonly scheduleOptions: GoogleBigqueryDataTransferConfigScheduleOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#schedule_options GoogleBigqueryDataTransferConfig#schedule_options}

---

##### `sensitiveParams`<sup>Optional</sup> <a name="sensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.sensitiveParams"></a>

```typescript
public readonly sensitiveParams: GoogleBigqueryDataTransferConfigSensitiveParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#sensitive_params GoogleBigqueryDataTransferConfig#sensitive_params}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#service_account_name GoogleBigqueryDataTransferConfig#service_account_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryDataTransferConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#timeouts GoogleBigqueryDataTransferConfig#timeouts}

---

### GoogleBigqueryDataTransferConfigEmailPreferences <a name="GoogleBigqueryDataTransferConfigEmailPreferences" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

const googleBigqueryDataTransferConfigEmailPreferences: googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail">enableFailureEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, email notifications will be sent on transfer run failures. |

---

##### `enableFailureEmail`<sup>Required</sup> <a name="enableFailureEmail" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail"></a>

```typescript
public readonly enableFailureEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#enable_failure_email GoogleBigqueryDataTransferConfig#enable_failure_email}

---

### GoogleBigqueryDataTransferConfigEncryptionConfiguration <a name="GoogleBigqueryDataTransferConfigEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

const googleBigqueryDataTransferConfigEncryptionConfiguration: googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The name of the KMS key used for encrypting BigQuery data. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The name of the KMS key used for encrypting BigQuery data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#kms_key_name GoogleBigqueryDataTransferConfig#kms_key_name}

---

### GoogleBigqueryDataTransferConfigScheduleOptions <a name="GoogleBigqueryDataTransferConfigScheduleOptions" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

const googleBigqueryDataTransferConfigScheduleOptions: googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling">disableAutoScheduling</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, automatic scheduling of data transfer runs for this configuration will be disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.endTime">endTime</a></code> | <code>string</code> | Defines time to stop scheduling transfer runs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.startTime">startTime</a></code> | <code>string</code> | Specifies time to start scheduling transfer runs. |

---

##### `disableAutoScheduling`<sup>Optional</sup> <a name="disableAutoScheduling" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling"></a>

```typescript
public readonly disableAutoScheduling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#disable_auto_scheduling GoogleBigqueryDataTransferConfig#disable_auto_scheduling}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#end_time GoogleBigqueryDataTransferConfig#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#start_time GoogleBigqueryDataTransferConfig#start_time}

---

### GoogleBigqueryDataTransferConfigSensitiveParams <a name="GoogleBigqueryDataTransferConfigSensitiveParams" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

const googleBigqueryDataTransferConfigSensitiveParams: googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | The Secret Access Key of the AWS account transferring data from. |

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#secret_access_key GoogleBigqueryDataTransferConfig#secret_access_key}

---

### GoogleBigqueryDataTransferConfigTimeouts <a name="GoogleBigqueryDataTransferConfigTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

const googleBigqueryDataTransferConfigTimeouts: googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#create GoogleBigqueryDataTransferConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#delete GoogleBigqueryDataTransferConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#update GoogleBigqueryDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#create GoogleBigqueryDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#delete GoogleBigqueryDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_data_transfer_config#update GoogleBigqueryDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference <a name="GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

new googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput">enableFailureEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail">enableFailureEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableFailureEmailInput`<sup>Optional</sup> <a name="enableFailureEmailInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput"></a>

```typescript
public readonly enableFailureEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFailureEmail`<sup>Required</sup> <a name="enableFailureEmail" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail"></a>

```typescript
public readonly enableFailureEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryDataTransferConfigEmailPreferences;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEmailPreferences">GoogleBigqueryDataTransferConfigEmailPreferences</a>

---


### GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference <a name="GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

new googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryDataTransferConfigEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigEncryptionConfiguration">GoogleBigqueryDataTransferConfigEncryptionConfiguration</a>

---


### GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference <a name="GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

new googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling">resetDisableAutoScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableAutoScheduling` <a name="resetDisableAutoScheduling" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling"></a>

```typescript
public resetDisableAutoScheduling(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput">disableAutoSchedulingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling">disableAutoScheduling</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableAutoSchedulingInput`<sup>Optional</sup> <a name="disableAutoSchedulingInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput"></a>

```typescript
public readonly disableAutoSchedulingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `disableAutoScheduling`<sup>Required</sup> <a name="disableAutoScheduling" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling"></a>

```typescript
public readonly disableAutoScheduling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryDataTransferConfigScheduleOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigScheduleOptions">GoogleBigqueryDataTransferConfigScheduleOptions</a>

---


### GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference <a name="GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

new googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryDataTransferConfigSensitiveParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigSensitiveParams">GoogleBigqueryDataTransferConfigSensitiveParams</a>

---


### GoogleBigqueryDataTransferConfigTimeoutsOutputReference <a name="GoogleBigqueryDataTransferConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferConfig } from '@cdktf/provider-google-beta'

new googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryDataTransferConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryDataTransferConfig.GoogleBigqueryDataTransferConfigTimeouts">GoogleBigqueryDataTransferConfigTimeouts</a>

---



