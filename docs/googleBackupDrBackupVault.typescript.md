# `googleBackupDrBackupVault` Submodule <a name="`googleBackupDrBackupVault` Submodule" id="@cdktf/provider-google-beta.googleBackupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrBackupVault <a name="GoogleBackupDrBackupVault" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

new googleBackupDrBackupVault.GoogleBackupDrBackupVault(scope: Construct, id: string, config: GoogleBackupDrBackupVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig">GoogleBackupDrBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig">GoogleBackupDrBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAccessRestriction">resetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAllowMissing">resetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetEffectiveTime">resetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreBackupPlanReferences">resetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreInactiveDatasources">resetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBackupDrBackupVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---

##### `resetAccessRestriction` <a name="resetAccessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAccessRestriction"></a>

```typescript
public resetAccessRestriction(): void
```

##### `resetAllowMissing` <a name="resetAllowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAllowMissing"></a>

```typescript
public resetAllowMissing(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEffectiveTime` <a name="resetEffectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetEffectiveTime"></a>

```typescript
public resetEffectiveTime(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreBackupPlanReferences` <a name="resetIgnoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```typescript
public resetIgnoreBackupPlanReferences(): void
```

##### `resetIgnoreInactiveDatasources` <a name="resetIgnoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```typescript
public resetIgnoreInactiveDatasources(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupCount">backupCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference">GoogleBackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.totalStoredBytes">totalStoredBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestrictionInput">accessRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissingInput">allowMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">backupMinimumEnforcedRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTimeInput">effectiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferencesInput">ignoreBackupPlanReferencesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasourcesInput">ignoreInactiveDatasourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestriction">accessRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupCount"></a>

```typescript
public readonly backupCount: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.deletable"></a>

```typescript
public readonly deletable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBackupDrBackupVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference">GoogleBackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.totalStoredBytes"></a>

```typescript
public readonly totalStoredBytes: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessRestrictionInput`<sup>Optional</sup> <a name="accessRestrictionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestrictionInput"></a>

```typescript
public readonly accessRestrictionInput: string;
```

- *Type:* string

---

##### `allowMissingInput`<sup>Optional</sup> <a name="allowMissingInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissingInput"></a>

```typescript
public readonly allowMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="backupMinimumEnforcedRetentionDurationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```typescript
public readonly backupMinimumEnforcedRetentionDurationInput: string;
```

- *Type:* string

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultIdInput"></a>

```typescript
public readonly backupVaultIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectiveTimeInput`<sup>Optional</sup> <a name="effectiveTimeInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTimeInput"></a>

```typescript
public readonly effectiveTimeInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="ignoreBackupPlanReferencesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```typescript
public readonly ignoreBackupPlanReferencesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="ignoreInactiveDatasourcesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```typescript
public readonly ignoreInactiveDatasourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBackupDrBackupVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---

##### `accessRestriction`<sup>Required</sup> <a name="accessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestriction"></a>

```typescript
public readonly accessRestriction: string;
```

- *Type:* string

---

##### `allowMissing`<sup>Required</sup> <a name="allowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```typescript
public readonly backupMinimumEnforcedRetentionDuration: string;
```

- *Type:* string

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreBackupPlanReferences`<sup>Required</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```typescript
public readonly ignoreBackupPlanReferences: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreInactiveDatasources`<sup>Required</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```typescript
public readonly ignoreInactiveDatasources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrBackupVaultConfig <a name="GoogleBackupDrBackupVaultConfig" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.Initializer"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

const googleBackupDrBackupVaultConfig: googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.location">location</a></code> | <code>string</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.accessRestriction">accessRestriction</a></code> | <code>string</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.description">description</a></code> | <code>string</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```typescript
public readonly backupMinimumEnforcedRetentionDuration: string;
```

- *Type:* string

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#backup_minimum_enforced_retention_duration GoogleBackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#backup_vault_id GoogleBackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#location GoogleBackupDrBackupVault#location}

---

##### `accessRestriction`<sup>Optional</sup> <a name="accessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.accessRestriction"></a>

```typescript
public readonly accessRestriction: string;
```

- *Type:* string

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#access_restriction GoogleBackupDrBackupVault#access_restriction}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#allow_missing GoogleBackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#annotations GoogleBackupDrBackupVault#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#description GoogleBackupDrBackupVault#description}

---

##### `effectiveTime`<sup>Optional</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#effective_time GoogleBackupDrBackupVault#effective_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#force_delete GoogleBackupDrBackupVault#force_delete}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
 the restriction against conflicting retention periods. This conflict may occur when the
 expiration schedule defined by the associated backup plan is shorter than the minimum
 retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#force_update GoogleBackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreBackupPlanReferences`<sup>Optional</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```typescript
public readonly ignoreBackupPlanReferences: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#ignore_backup_plan_references GoogleBackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignoreInactiveDatasources`<sup>Optional</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```typescript
public readonly ignoreInactiveDatasources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#ignore_inactive_datasources GoogleBackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#labels GoogleBackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBackupDrBackupVaultTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#timeouts GoogleBackupDrBackupVault#timeouts}

---

### GoogleBackupDrBackupVaultTimeouts <a name="GoogleBackupDrBackupVaultTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.Initializer"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

const googleBackupDrBackupVaultTimeouts: googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#create GoogleBackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#delete GoogleBackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#update GoogleBackupDrBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#create GoogleBackupDrBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#delete GoogleBackupDrBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#update GoogleBackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrBackupVaultTimeoutsOutputReference <a name="GoogleBackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBackupDrBackupVault } from '@cdktf/provider-google-beta'

new googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrBackupVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---



