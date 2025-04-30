# `googleNetappVolume` Submodule <a name="`googleNetappVolume` Submodule" id="@cdktf/provider-google-beta.googleNetappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolume <a name="GoogleNetappVolume" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolume(scope: Construct, id: string, config: GoogleNetappVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig">GoogleNetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig">GoogleNetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy">putExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters">putRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy">putSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy">putTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy">resetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled">resetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity">resetLargeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints">resetMultipleEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters">resetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions">resetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings">resetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory">resetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy">resetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy">resetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions">resetUnixPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig"></a>

```typescript
public putBackupConfig(value: GoogleNetappVolumeBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `putExportPolicy` <a name="putExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy"></a>

```typescript
public putExportPolicy(value: GoogleNetappVolumeExportPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `putRestoreParameters` <a name="putRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters"></a>

```typescript
public putRestoreParameters(value: GoogleNetappVolumeRestoreParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `putSnapshotPolicy` <a name="putSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy"></a>

```typescript
public putSnapshotPolicy(value: GoogleNetappVolumeSnapshotPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `putTieringPolicy` <a name="putTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy"></a>

```typescript
public putTieringPolicy(value: GoogleNetappVolumeTieringPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetappVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

---

##### `resetBackupConfig` <a name="resetBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig"></a>

```typescript
public resetBackupConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExportPolicy` <a name="resetExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy"></a>

```typescript
public resetExportPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKerberosEnabled` <a name="resetKerberosEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled"></a>

```typescript
public resetKerberosEnabled(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLargeCapacity` <a name="resetLargeCapacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity"></a>

```typescript
public resetLargeCapacity(): void
```

##### `resetMultipleEndpoints` <a name="resetMultipleEndpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints"></a>

```typescript
public resetMultipleEndpoints(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRestoreParameters` <a name="resetRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters"></a>

```typescript
public resetRestoreParameters(): void
```

##### `resetRestrictedActions` <a name="resetRestrictedActions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions"></a>

```typescript
public resetRestrictedActions(): void
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle"></a>

```typescript
public resetSecurityStyle(): void
```

##### `resetSmbSettings` <a name="resetSmbSettings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings"></a>

```typescript
public resetSmbSettings(): void
```

##### `resetSnapshotDirectory` <a name="resetSnapshotDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory"></a>

```typescript
public resetSnapshotDirectory(): void
```

##### `resetSnapshotPolicy` <a name="resetSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy"></a>

```typescript
public resetSnapshotPolicy(): void
```

##### `resetTieringPolicy` <a name="resetTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy"></a>

```typescript
public resetTieringPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnixPermissions` <a name="resetUnixPermissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions"></a>

```typescript
public resetUnixPermissions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

googleNetappVolume.GoogleNetappVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

googleNetappVolume.GoogleNetappVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

googleNetappVolume.GoogleNetappVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

googleNetappVolume.GoogleNetappVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory">activeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib">coldTierSizeGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication">hasReplication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig">kmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled">ldapEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange">psaRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone">replicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib">usedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput">capacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput">exportPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput">kerberosEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput">largeCapacityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput">multipleEndpointsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput">restoreParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput">restrictedActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput">smbSettingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput">snapshotDirectoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput">snapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput">storagePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput">unixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib">capacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled">kerberosEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity">largeCapacity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints">multipleEndpoints</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions">restrictedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle">securityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings">smbSettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory">snapshotDirectory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool">storagePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions">unixPermissions</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: string;
```

- *Type:* string

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig"></a>

```typescript
public readonly backupConfig: GoogleNetappVolumeBackupConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a>

---

##### `coldTierSizeGib`<sup>Required</sup> <a name="coldTierSizeGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib"></a>

```typescript
public readonly coldTierSizeGib: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `exportPolicy`<sup>Required</sup> <a name="exportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy"></a>

```typescript
public readonly exportPolicy: GoogleNetappVolumeExportPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a>

---

##### `hasReplication`<sup>Required</sup> <a name="hasReplication" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication"></a>

```typescript
public readonly hasReplication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsConfig`<sup>Required</sup> <a name="kmsConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig"></a>

```typescript
public readonly kmsConfig: string;
```

- *Type:* string

---

##### `ldapEnabled`<sup>Required</sup> <a name="ldapEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled"></a>

```typescript
public readonly ldapEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions"></a>

```typescript
public readonly mountOptions: GoogleNetappVolumeMountOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `psaRange`<sup>Required</sup> <a name="psaRange" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange"></a>

```typescript
public readonly psaRange: string;
```

- *Type:* string

---

##### `replicaZone`<sup>Required</sup> <a name="replicaZone" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone"></a>

```typescript
public readonly replicaZone: string;
```

- *Type:* string

---

##### `restoreParameters`<sup>Required</sup> <a name="restoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters"></a>

```typescript
public readonly restoreParameters: GoogleNetappVolumeRestoreParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a>

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: GoogleNetappVolumeSnapshotPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: GoogleNetappVolumeTieringPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a>

---

##### `usedGib`<sup>Required</sup> <a name="usedGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib"></a>

```typescript
public readonly usedGib: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput"></a>

```typescript
public readonly backupConfigInput: GoogleNetappVolumeBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput"></a>

```typescript
public readonly capacityGibInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exportPolicyInput`<sup>Optional</sup> <a name="exportPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput"></a>

```typescript
public readonly exportPolicyInput: GoogleNetappVolumeExportPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kerberosEnabledInput`<sup>Optional</sup> <a name="kerberosEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput"></a>

```typescript
public readonly kerberosEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `largeCapacityInput`<sup>Optional</sup> <a name="largeCapacityInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput"></a>

```typescript
public readonly largeCapacityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multipleEndpointsInput`<sup>Optional</sup> <a name="multipleEndpointsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput"></a>

```typescript
public readonly multipleEndpointsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `restoreParametersInput`<sup>Optional</sup> <a name="restoreParametersInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput"></a>

```typescript
public readonly restoreParametersInput: GoogleNetappVolumeRestoreParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `restrictedActionsInput`<sup>Optional</sup> <a name="restrictedActionsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput"></a>

```typescript
public readonly restrictedActionsInput: string[];
```

- *Type:* string[]

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput"></a>

```typescript
public readonly securityStyleInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `smbSettingsInput`<sup>Optional</sup> <a name="smbSettingsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput"></a>

```typescript
public readonly smbSettingsInput: string[];
```

- *Type:* string[]

---

##### `snapshotDirectoryInput`<sup>Optional</sup> <a name="snapshotDirectoryInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput"></a>

```typescript
public readonly snapshotDirectoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotPolicyInput`<sup>Optional</sup> <a name="snapshotPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput"></a>

```typescript
public readonly snapshotPolicyInput: GoogleNetappVolumeSnapshotPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput"></a>

```typescript
public readonly storagePoolInput: string;
```

- *Type:* string

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput"></a>

```typescript
public readonly tieringPolicyInput: GoogleNetappVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetappVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

---

##### `unixPermissionsInput`<sup>Optional</sup> <a name="unixPermissionsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput"></a>

```typescript
public readonly unixPermissionsInput: string;
```

- *Type:* string

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kerberosEnabled`<sup>Required</sup> <a name="kerberosEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled"></a>

```typescript
public readonly kerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `largeCapacity`<sup>Required</sup> <a name="largeCapacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity"></a>

```typescript
public readonly largeCapacity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multipleEndpoints`<sup>Required</sup> <a name="multipleEndpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints"></a>

```typescript
public readonly multipleEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `restrictedActions`<sup>Required</sup> <a name="restrictedActions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions"></a>

```typescript
public readonly restrictedActions: string[];
```

- *Type:* string[]

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `smbSettings`<sup>Required</sup> <a name="smbSettings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings"></a>

```typescript
public readonly smbSettings: string[];
```

- *Type:* string[]

---

##### `snapshotDirectory`<sup>Required</sup> <a name="snapshotDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory"></a>

```typescript
public readonly snapshotDirectory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

---

##### `unixPermissions`<sup>Required</sup> <a name="unixPermissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions"></a>

```typescript
public readonly unixPermissions: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeBackupConfig <a name="GoogleNetappVolumeBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeBackupConfig: googleNetappVolume.GoogleNetappVolumeBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies">backupPolicies</a></code> | <code>string[]</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault">backupVault</a></code> | <code>string</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled">scheduledBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `backupPolicies`<sup>Optional</sup> <a name="backupPolicies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies"></a>

```typescript
public readonly backupPolicies: string[];
```

- *Type:* string[]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#backup_policies GoogleNetappVolume#backup_policies}

---

##### `backupVault`<sup>Optional</sup> <a name="backupVault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#backup_vault GoogleNetappVolume#backup_vault}

---

##### `scheduledBackupEnabled`<sup>Optional</sup> <a name="scheduledBackupEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```typescript
public readonly scheduledBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#scheduled_backup_enabled GoogleNetappVolume#scheduled_backup_enabled}

---

### GoogleNetappVolumeConfig <a name="GoogleNetappVolumeConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeConfig: googleNetappVolume.GoogleNetappVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib">capacityGib</a></code> | <code>string</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location">location</a></code> | <code>string</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name">name</a></code> | <code>string</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols">protocols</a></code> | <code>string[]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName">shareName</a></code> | <code>string</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool">storagePool</a></code> | <code>string</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled">kerberosEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity">largeCapacity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints">multipleEndpoints</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions">restrictedActions</a></code> | <code>string[]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>string</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings">smbSettings</a></code> | <code>string[]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory">snapshotDirectory</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions">unixPermissions</a></code> | <code>string</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#capacity_gib GoogleNetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#location GoogleNetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#protocols GoogleNetappVolume#protocols}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#share_name GoogleNetappVolume#share_name}

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#storage_pool GoogleNetappVolume#storage_pool}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig"></a>

```typescript
public readonly backupConfig: GoogleNetappVolumeBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#backup_config GoogleNetappVolume#backup_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#deletion_policy GoogleNetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}

---

##### `exportPolicy`<sup>Optional</sup> <a name="exportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy"></a>

```typescript
public readonly exportPolicy: GoogleNetappVolumeExportPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#export_policy GoogleNetappVolume#export_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled"></a>

```typescript
public readonly kerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos_enabled GoogleNetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}

---

##### `largeCapacity`<sup>Optional</sup> <a name="largeCapacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity"></a>

```typescript
public readonly largeCapacity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#large_capacity GoogleNetappVolume#large_capacity}

---

##### `multipleEndpoints`<sup>Optional</sup> <a name="multipleEndpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints"></a>

```typescript
public readonly multipleEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#multiple_endpoints GoogleNetappVolume#multiple_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}.

---

##### `restoreParameters`<sup>Optional</sup> <a name="restoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters"></a>

```typescript
public readonly restoreParameters: GoogleNetappVolumeRestoreParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#restore_parameters GoogleNetappVolume#restore_parameters}

---

##### `restrictedActions`<sup>Optional</sup> <a name="restrictedActions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions"></a>

```typescript
public readonly restrictedActions: string[];
```

- *Type:* string[]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#restricted_actions GoogleNetappVolume#restricted_actions}

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#security_style GoogleNetappVolume#security_style}

---

##### `smbSettings`<sup>Optional</sup> <a name="smbSettings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings"></a>

```typescript
public readonly smbSettings: string[];
```

- *Type:* string[]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#smb_settings GoogleNetappVolume#smb_settings}

---

##### `snapshotDirectory`<sup>Optional</sup> <a name="snapshotDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory"></a>

```typescript
public readonly snapshotDirectory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#snapshot_directory GoogleNetappVolume#snapshot_directory}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: GoogleNetappVolumeSnapshotPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#snapshot_policy GoogleNetappVolume#snapshot_policy}

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: GoogleNetappVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#tiering_policy GoogleNetappVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#timeouts GoogleNetappVolume#timeouts}

---

##### `unixPermissions`<sup>Optional</sup> <a name="unixPermissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions"></a>

```typescript
public readonly unixPermissions: string;
```

- *Type:* string

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#unix_permissions GoogleNetappVolume#unix_permissions}

---

### GoogleNetappVolumeExportPolicy <a name="GoogleNetappVolumeExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeExportPolicy: googleNetappVolume.GoogleNetappVolumeExportPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleNetappVolumeExportPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#rules GoogleNetappVolume#rules}

---

### GoogleNetappVolumeExportPolicyRules <a name="GoogleNetappVolumeExportPolicyRules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeExportPolicyRules: googleNetappVolume.GoogleNetappVolumeExportPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType">accessType</a></code> | <code>string</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients">allowedClients</a></code> | <code>string</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess">hasRootAccess</a></code> | <code>string</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly">kerberos5IReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite">kerberos5IReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly">kerberos5PReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite">kerberos5PReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly">kerberos5ReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite">kerberos5ReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3">nfsv3</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4">nfsv4</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#access_type GoogleNetappVolume#access_type}

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients"></a>

```typescript
public readonly allowedClients: string;
```

- *Type:* string

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#allowed_clients GoogleNetappVolume#allowed_clients}

---

##### `hasRootAccess`<sup>Optional</sup> <a name="hasRootAccess" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```typescript
public readonly hasRootAccess: string;
```

- *Type:* string

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#has_root_access GoogleNetappVolume#has_root_access}

---

##### `kerberos5IReadOnly`<sup>Optional</sup> <a name="kerberos5IReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```typescript
public readonly kerberos5IReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos5i_read_only GoogleNetappVolume#kerberos5i_read_only}

---

##### `kerberos5IReadWrite`<sup>Optional</sup> <a name="kerberos5IReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```typescript
public readonly kerberos5IReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos5i_read_write GoogleNetappVolume#kerberos5i_read_write}

---

##### `kerberos5PReadOnly`<sup>Optional</sup> <a name="kerberos5PReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```typescript
public readonly kerberos5PReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos5p_read_only GoogleNetappVolume#kerberos5p_read_only}

---

##### `kerberos5PReadWrite`<sup>Optional</sup> <a name="kerberos5PReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```typescript
public readonly kerberos5PReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos5p_read_write GoogleNetappVolume#kerberos5p_read_write}

---

##### `kerberos5ReadOnly`<sup>Optional</sup> <a name="kerberos5ReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```typescript
public readonly kerberos5ReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos5_read_only GoogleNetappVolume#kerberos5_read_only}

---

##### `kerberos5ReadWrite`<sup>Optional</sup> <a name="kerberos5ReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```typescript
public readonly kerberos5ReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#kerberos5_read_write GoogleNetappVolume#kerberos5_read_write}

---

##### `nfsv3`<sup>Optional</sup> <a name="nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3"></a>

```typescript
public readonly nfsv3: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#nfsv3 GoogleNetappVolume#nfsv3}

---

##### `nfsv4`<sup>Optional</sup> <a name="nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4"></a>

```typescript
public readonly nfsv4: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#nfsv4 GoogleNetappVolume#nfsv4}

---

### GoogleNetappVolumeMountOptions <a name="GoogleNetappVolumeMountOptions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeMountOptions: googleNetappVolume.GoogleNetappVolumeMountOptions = { ... }
```


### GoogleNetappVolumeRestoreParameters <a name="GoogleNetappVolumeRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeRestoreParameters: googleNetappVolume.GoogleNetappVolumeRestoreParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `sourceBackup`<sup>Optional</sup> <a name="sourceBackup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#source_backup GoogleNetappVolume#source_backup}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#source_snapshot GoogleNetappVolume#source_snapshot}

---

### GoogleNetappVolumeSnapshotPolicy <a name="GoogleNetappVolumeSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeSnapshotPolicy: googleNetappVolume.GoogleNetappVolumeSnapshotPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: GoogleNetappVolumeSnapshotPolicyDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#daily_schedule GoogleNetappVolume#daily_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#enabled GoogleNetappVolume#enabled}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: GoogleNetappVolumeSnapshotPolicyHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#hourly_schedule GoogleNetappVolume#hourly_schedule}

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: GoogleNetappVolumeSnapshotPolicyMonthlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#monthly_schedule GoogleNetappVolume#monthly_schedule}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: GoogleNetappVolumeSnapshotPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#weekly_schedule GoogleNetappVolume#weekly_schedule}

---

### GoogleNetappVolumeSnapshotPolicyDailySchedule <a name="GoogleNetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeSnapshotPolicyDailySchedule: googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyHourlySchedule <a name="GoogleNetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeSnapshotPolicyHourlySchedule: googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyMonthlySchedule <a name="GoogleNetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeSnapshotPolicyMonthlySchedule: googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>string</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: string;
```

- *Type:* string

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#days_of_month GoogleNetappVolume#days_of_month}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyWeeklySchedule <a name="GoogleNetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeSnapshotPolicyWeeklySchedule: googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day">day</a></code> | <code>string</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#day GoogleNetappVolume#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeTieringPolicy <a name="GoogleNetappVolumeTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeTieringPolicy: googleNetappVolume.GoogleNetappVolumeTieringPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays">coolingThresholdDays</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction">tierAction</a></code> | <code>string</code> | Optional. |

---

##### `coolingThresholdDays`<sup>Optional</sup> <a name="coolingThresholdDays" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```typescript
public readonly coolingThresholdDays: number;
```

- *Type:* number

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#cooling_threshold_days GoogleNetappVolume#cooling_threshold_days}

---

##### `tierAction`<sup>Optional</sup> <a name="tierAction" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction"></a>

```typescript
public readonly tierAction: string;
```

- *Type:* string

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#tier_action GoogleNetappVolume#tier_action}

---

### GoogleNetappVolumeTimeouts <a name="GoogleNetappVolumeTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

const googleNetappVolumeTimeouts: googleNetappVolume.GoogleNetappVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeBackupConfigOutputReference <a name="GoogleNetappVolumeBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies">resetBackupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault">resetBackupVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">resetScheduledBackupEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupPolicies` <a name="resetBackupPolicies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```typescript
public resetBackupPolicies(): void
```

##### `resetBackupVault` <a name="resetBackupVault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```typescript
public resetBackupVault(): void
```

##### `resetScheduledBackupEnabled` <a name="resetScheduledBackupEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```typescript
public resetScheduledBackupEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">backupPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput">backupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">scheduledBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies">backupPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault">backupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">scheduledBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPoliciesInput`<sup>Optional</sup> <a name="backupPoliciesInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```typescript
public readonly backupPoliciesInput: string[];
```

- *Type:* string[]

---

##### `backupVaultInput`<sup>Optional</sup> <a name="backupVaultInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```typescript
public readonly backupVaultInput: string;
```

- *Type:* string

---

##### `scheduledBackupEnabledInput`<sup>Optional</sup> <a name="scheduledBackupEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```typescript
public readonly scheduledBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupPolicies`<sup>Required</sup> <a name="backupPolicies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```typescript
public readonly backupPolicies: string[];
```

- *Type:* string[]

---

##### `backupVault`<sup>Required</sup> <a name="backupVault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

---

##### `scheduledBackupEnabled`<sup>Required</sup> <a name="scheduledBackupEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```typescript
public readonly scheduledBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeBackupConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---


### GoogleNetappVolumeExportPolicyOutputReference <a name="GoogleNetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleNetappVolumeExportPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules"></a>

```typescript
public readonly rules: GoogleNetappVolumeExportPolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleNetappVolumeExportPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeExportPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---


### GoogleNetappVolumeExportPolicyRulesList <a name="GoogleNetappVolumeExportPolicyRulesList" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleNetappVolumeExportPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappVolumeExportPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>[]

---


### GoogleNetappVolumeExportPolicyRulesOutputReference <a name="GoogleNetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">resetHasRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">resetKerberos5IReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">resetKerberos5IReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">resetKerberos5PReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">resetKerberos5PReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">resetKerberos5ReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">resetKerberos5ReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3">resetNfsv3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4">resetNfsv4</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```typescript
public resetAllowedClients(): void
```

##### `resetHasRootAccess` <a name="resetHasRootAccess" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```typescript
public resetHasRootAccess(): void
```

##### `resetKerberos5IReadOnly` <a name="resetKerberos5IReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```typescript
public resetKerberos5IReadOnly(): void
```

##### `resetKerberos5IReadWrite` <a name="resetKerberos5IReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```typescript
public resetKerberos5IReadWrite(): void
```

##### `resetKerberos5PReadOnly` <a name="resetKerberos5PReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```typescript
public resetKerberos5PReadOnly(): void
```

##### `resetKerberos5PReadWrite` <a name="resetKerberos5PReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```typescript
public resetKerberos5PReadWrite(): void
```

##### `resetKerberos5ReadOnly` <a name="resetKerberos5ReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```typescript
public resetKerberos5ReadOnly(): void
```

##### `resetKerberos5ReadWrite` <a name="resetKerberos5ReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```typescript
public resetKerberos5ReadWrite(): void
```

##### `resetNfsv3` <a name="resetNfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```typescript
public resetNfsv3(): void
```

##### `resetNfsv4` <a name="resetNfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```typescript
public resetNfsv4(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">hasRootAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">kerberos5IReadOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">kerberos5IReadWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">kerberos5PReadOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">kerberos5PReadWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">kerberos5ReadOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">kerberos5ReadWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">nfsv3Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">nfsv4Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients">allowedClients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">hasRootAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">kerberos5IReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">kerberos5IReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">kerberos5PReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">kerberos5PReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">kerberos5ReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">kerberos5ReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3">nfsv3</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4">nfsv4</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```typescript
public readonly allowedClientsInput: string;
```

- *Type:* string

---

##### `hasRootAccessInput`<sup>Optional</sup> <a name="hasRootAccessInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```typescript
public readonly hasRootAccessInput: string;
```

- *Type:* string

---

##### `kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="kerberos5IReadOnlyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```typescript
public readonly kerberos5IReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5IReadWriteInput`<sup>Optional</sup> <a name="kerberos5IReadWriteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```typescript
public readonly kerberos5IReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="kerberos5PReadOnlyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```typescript
public readonly kerberos5PReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5PReadWriteInput`<sup>Optional</sup> <a name="kerberos5PReadWriteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```typescript
public readonly kerberos5PReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="kerberos5ReadOnlyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```typescript
public readonly kerberos5ReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5ReadWriteInput`<sup>Optional</sup> <a name="kerberos5ReadWriteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```typescript
public readonly kerberos5ReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nfsv3Input`<sup>Optional</sup> <a name="nfsv3Input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```typescript
public readonly nfsv3Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nfsv4Input`<sup>Optional</sup> <a name="nfsv4Input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```typescript
public readonly nfsv4Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```typescript
public readonly allowedClients: string;
```

- *Type:* string

---

##### `hasRootAccess`<sup>Required</sup> <a name="hasRootAccess" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```typescript
public readonly hasRootAccess: string;
```

- *Type:* string

---

##### `kerberos5IReadOnly`<sup>Required</sup> <a name="kerberos5IReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```typescript
public readonly kerberos5IReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5IReadWrite`<sup>Required</sup> <a name="kerberos5IReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```typescript
public readonly kerberos5IReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5PReadOnly`<sup>Required</sup> <a name="kerberos5PReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```typescript
public readonly kerberos5PReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5PReadWrite`<sup>Required</sup> <a name="kerberos5PReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```typescript
public readonly kerberos5PReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5ReadOnly`<sup>Required</sup> <a name="kerberos5ReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```typescript
public readonly kerberos5ReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberos5ReadWrite`<sup>Required</sup> <a name="kerberos5ReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```typescript
public readonly kerberos5ReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nfsv3`<sup>Required</sup> <a name="nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```typescript
public readonly nfsv3: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nfsv4`<sup>Required</sup> <a name="nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```typescript
public readonly nfsv4: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappVolumeExportPolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>

---


### GoogleNetappVolumeMountOptionsList <a name="GoogleNetappVolumeMountOptionsList" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeMountOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get"></a>

```typescript
public get(index: number): GoogleNetappVolumeMountOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetappVolumeMountOptionsOutputReference <a name="GoogleNetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export">export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull">exportFull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export"></a>

```typescript
public readonly export: string;
```

- *Type:* string

---

##### `exportFull`<sup>Required</sup> <a name="exportFull" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```typescript
public readonly exportFull: string;
```

- *Type:* string

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeMountOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a>

---


### GoogleNetappVolumeRestoreParametersOutputReference <a name="GoogleNetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup">resetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceBackup` <a name="resetSourceBackup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```typescript
public resetSourceBackup(): void
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```typescript
public resetSourceSnapshot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">sourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceBackupInput`<sup>Optional</sup> <a name="sourceBackupInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```typescript
public readonly sourceBackupInput: string;
```

- *Type:* string

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```typescript
public readonly sourceSnapshotInput: string;
```

- *Type:* string

---

##### `sourceBackup`<sup>Required</sup> <a name="sourceBackup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeRestoreParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---


### GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeSnapshotPolicyDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeSnapshotPolicyHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```typescript
public resetDaysOfMonth(): void
```

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeSnapshotPolicyMonthlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyOutputReference <a name="GoogleNetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">putHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">resetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```typescript
public putDailySchedule(value: GoogleNetappVolumeSnapshotPolicyDailySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `putHourlySchedule` <a name="putHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```typescript
public putHourlySchedule(value: GoogleNetappVolumeSnapshotPolicyHourlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```typescript
public putMonthlySchedule(value: GoogleNetappVolumeSnapshotPolicyMonthlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: GoogleNetappVolumeSnapshotPolicyWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHourlySchedule` <a name="resetHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```typescript
public resetHourlySchedule(): void
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```typescript
public resetMonthlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">hourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: GoogleNetappVolumeSnapshotPolicyDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hourlyScheduleInput`<sup>Optional</sup> <a name="hourlyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```typescript
public readonly hourlyScheduleInput: GoogleNetappVolumeSnapshotPolicyHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```typescript
public readonly monthlyScheduleInput: GoogleNetappVolumeSnapshotPolicyMonthlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: GoogleNetappVolumeSnapshotPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeSnapshotPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---


### GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeSnapshotPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### GoogleNetappVolumeTieringPolicyOutputReference <a name="GoogleNetappVolumeTieringPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">resetCoolingThresholdDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction">resetTierAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoolingThresholdDays` <a name="resetCoolingThresholdDays" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```typescript
public resetCoolingThresholdDays(): void
```

##### `resetTierAction` <a name="resetTierAction" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```typescript
public resetTierAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">coolingThresholdDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput">tierActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">coolingThresholdDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction">tierAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coolingThresholdDaysInput`<sup>Optional</sup> <a name="coolingThresholdDaysInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```typescript
public readonly coolingThresholdDaysInput: number;
```

- *Type:* number

---

##### `tierActionInput`<sup>Optional</sup> <a name="tierActionInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```typescript
public readonly tierActionInput: string;
```

- *Type:* string

---

##### `coolingThresholdDays`<sup>Required</sup> <a name="coolingThresholdDays" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```typescript
public readonly coolingThresholdDays: number;
```

- *Type:* number

---

##### `tierAction`<sup>Required</sup> <a name="tierAction" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```typescript
public readonly tierAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---


### GoogleNetappVolumeTimeoutsOutputReference <a name="GoogleNetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetappVolume } from '@cdktf/provider-google-beta'

new googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

---



