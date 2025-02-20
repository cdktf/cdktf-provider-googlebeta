# `googleFilestoreInstance` Submodule <a name="`googleFilestoreInstance` Submodule" id="@cdktf/provider-google-beta.googleFilestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFilestoreInstance <a name="GoogleFilestoreInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstance(scope: Construct, id: string, config: GoogleFilestoreInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig">GoogleFilestoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig">GoogleFilestoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares">putFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putInitialReplication">putInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig">putPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionReason">resetDeletionProtectionReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetInitialReplication">resetInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetPerformanceConfig">resetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFileShares` <a name="putFileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares"></a>

```typescript
public putFileShares(value: GoogleFilestoreInstanceFileShares): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---

##### `putInitialReplication` <a name="putInitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putInitialReplication"></a>

```typescript
public putInitialReplication(value: GoogleFilestoreInstanceInitialReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putInitialReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | GoogleFilestoreInstanceNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]

---

##### `putPerformanceConfig` <a name="putPerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig"></a>

```typescript
public putPerformanceConfig(value: GoogleFilestoreInstancePerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFilestoreInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetDeletionProtectionReason` <a name="resetDeletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionReason"></a>

```typescript
public resetDeletionProtectionReason(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialReplication` <a name="resetInitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetInitialReplication"></a>

```typescript
public resetInitialReplication(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPerformanceConfig` <a name="resetPerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetPerformanceConfig"></a>

```typescript
public resetPerformanceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFilestoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isConstruct"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

googleFilestoreInstance.GoogleFilestoreInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFilestoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFilestoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveReplication">effectiveReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList">GoogleFilestoreInstanceEffectiveReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileShares">fileShares</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference">GoogleFilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplication">initialReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference">GoogleFilestoreInstanceInitialReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList">GoogleFilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference">GoogleFilestoreInstancePerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference">GoogleFilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReasonInput">deletionProtectionReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileSharesInput">fileSharesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplicationInput">initialReplicationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfigInput">performanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReason">deletionProtectionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveReplication`<sup>Required</sup> <a name="effectiveReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveReplication"></a>

```typescript
public readonly effectiveReplication: GoogleFilestoreInstanceEffectiveReplicationList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList">GoogleFilestoreInstanceEffectiveReplicationList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fileShares`<sup>Required</sup> <a name="fileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileShares"></a>

```typescript
public readonly fileShares: GoogleFilestoreInstanceFileSharesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference">GoogleFilestoreInstanceFileSharesOutputReference</a>

---

##### `initialReplication`<sup>Required</sup> <a name="initialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplication"></a>

```typescript
public readonly initialReplication: GoogleFilestoreInstanceInitialReplicationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference">GoogleFilestoreInstanceInitialReplicationOutputReference</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networks"></a>

```typescript
public readonly networks: GoogleFilestoreInstanceNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList">GoogleFilestoreInstanceNetworksList</a>

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: GoogleFilestoreInstancePerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference">GoogleFilestoreInstancePerformanceConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFilestoreInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference">GoogleFilestoreInstanceTimeoutsOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionReasonInput`<sup>Optional</sup> <a name="deletionProtectionReasonInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReasonInput"></a>

```typescript
public readonly deletionProtectionReasonInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fileSharesInput`<sup>Optional</sup> <a name="fileSharesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileSharesInput"></a>

```typescript
public readonly fileSharesInput: GoogleFilestoreInstanceFileShares;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialReplicationInput`<sup>Optional</sup> <a name="initialReplicationInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplicationInput"></a>

```typescript
public readonly initialReplicationInput: GoogleFilestoreInstanceInitialReplication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | GoogleFilestoreInstanceNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]

---

##### `performanceConfigInput`<sup>Optional</sup> <a name="performanceConfigInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfigInput"></a>

```typescript
public readonly performanceConfigInput: GoogleFilestoreInstancePerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFilestoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionReason`<sup>Required</sup> <a name="deletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReason"></a>

```typescript
public readonly deletionProtectionReason: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFilestoreInstanceConfig <a name="GoogleFilestoreInstanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceConfig: googleFilestoreInstance.GoogleFilestoreInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.fileShares">fileShares</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.name">name</a></code> | <code>string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tier">tier</a></code> | <code>string</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the instance is protected against deletion. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionReason">deletionProtectionReason</a></code> | <code>string</code> | The reason for enabling deletion protection. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.description">description</a></code> | <code>string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#id GoogleFilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.initialReplication">initialReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a></code> | initial_replication block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.location">location</a></code> | <code>string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#project GoogleFilestoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.protocol">protocol</a></code> | <code>string</code> | Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.zone">zone</a></code> | <code>string</code> | The name of the Filestore zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fileShares`<sup>Required</sup> <a name="fileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.fileShares"></a>

```typescript
public readonly fileShares: GoogleFilestoreInstanceFileShares;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#file_shares GoogleFilestoreInstance#file_shares}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#name GoogleFilestoreInstance#name}

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | GoogleFilestoreInstanceNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#networks GoogleFilestoreInstance#networks}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#tier GoogleFilestoreInstance#tier}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the instance is protected against deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#deletion_protection_enabled GoogleFilestoreInstance#deletion_protection_enabled}

---

##### `deletionProtectionReason`<sup>Optional</sup> <a name="deletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionReason"></a>

```typescript
public readonly deletionProtectionReason: string;
```

- *Type:* string

The reason for enabling deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#deletion_protection_reason GoogleFilestoreInstance#deletion_protection_reason}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#description GoogleFilestoreInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#id GoogleFilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplication`<sup>Optional</sup> <a name="initialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.initialReplication"></a>

```typescript
public readonly initialReplication: GoogleFilestoreInstanceInitialReplication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

initial_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#initial_replication GoogleFilestoreInstance#initial_replication}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#kms_key_name GoogleFilestoreInstance#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#labels GoogleFilestoreInstance#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#location GoogleFilestoreInstance#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: GoogleFilestoreInstancePerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#performance_config GoogleFilestoreInstance#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#project GoogleFilestoreInstance#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#protocol GoogleFilestoreInstance#protocol}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys
and values have the same definition as resource manager
tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is
ignored when empty. The field is immutable and causes
resource replacement when mutated. This field is only set
at create time and modifying this field after creation
will trigger recreation. To apply tags to an existing
resource, see the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#tags GoogleFilestoreInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFilestoreInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#timeouts GoogleFilestoreInstance#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#zone GoogleFilestoreInstance#zone}

---

### GoogleFilestoreInstanceEffectiveReplication <a name="GoogleFilestoreInstanceEffectiveReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceEffectiveReplication: googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication = { ... }
```


### GoogleFilestoreInstanceEffectiveReplicationReplicas <a name="GoogleFilestoreInstanceEffectiveReplicationReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceEffectiveReplicationReplicas: googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas = { ... }
```


### GoogleFilestoreInstanceFileShares <a name="GoogleFilestoreInstanceFileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceFileShares: googleFilestoreInstance.GoogleFilestoreInstanceFileShares = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.capacityGb">capacityGb</a></code> | <code>number</code> | File share capacity in GiB. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.name">name</a></code> | <code>string</code> | The name of the fileshare (16 characters or less). |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.nfsExportOptions">nfsExportOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | nfs_export_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from. |

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.capacityGb"></a>

```typescript
public readonly capacityGb: number;
```

- *Type:* number

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#capacity_gb GoogleFilestoreInstance#capacity_gb}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#name GoogleFilestoreInstance#name}

---

##### `nfsExportOptions`<sup>Optional</sup> <a name="nfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.nfsExportOptions"></a>

```typescript
public readonly nfsExportOptions: IResolvable | GoogleFilestoreInstanceFileSharesNfsExportOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#nfs_export_options GoogleFilestoreInstance#nfs_export_options}

---

##### `sourceBackup`<sup>Optional</sup> <a name="sourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#source_backup GoogleFilestoreInstance#source_backup}

---

### GoogleFilestoreInstanceFileSharesNfsExportOptions <a name="GoogleFilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceFileSharesNfsExportOptions: googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.accessMode">accessMode</a></code> | <code>string</code> | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonGid">anonGid</a></code> | <code>number</code> | An integer representing the anonymous group id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonUid">anonUid</a></code> | <code>number</code> | An integer representing the anonymous user id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.ipRanges">ipRanges</a></code> | <code>string[]</code> | List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.squashMode">squashMode</a></code> | <code>string</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#access_mode GoogleFilestoreInstance#access_mode}

---

##### `anonGid`<sup>Optional</sup> <a name="anonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```typescript
public readonly anonGid: number;
```

- *Type:* number

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#anon_gid GoogleFilestoreInstance#anon_gid}

---

##### `anonUid`<sup>Optional</sup> <a name="anonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```typescript
public readonly anonUid: number;
```

- *Type:* number

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#anon_uid GoogleFilestoreInstance#anon_uid}

---

##### `ipRanges`<sup>Optional</sup> <a name="ipRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```typescript
public readonly ipRanges: string[];
```

- *Type:* string[]

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#ip_ranges GoogleFilestoreInstance#ip_ranges}

---

##### `squashMode`<sup>Optional</sup> <a name="squashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#squash_mode GoogleFilestoreInstance#squash_mode}

---

### GoogleFilestoreInstanceInitialReplication <a name="GoogleFilestoreInstanceInitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceInitialReplication: googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.replicas">replicas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]</code> | replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.role">role</a></code> | <code>string</code> | The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"]. |

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.replicas"></a>

```typescript
public readonly replicas: IResolvable | GoogleFilestoreInstanceInitialReplicationReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#replicas GoogleFilestoreInstance#replicas}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#role GoogleFilestoreInstance#role}

---

### GoogleFilestoreInstanceInitialReplicationReplicas <a name="GoogleFilestoreInstanceInitialReplicationReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceInitialReplicationReplicas: googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas.property.peerInstance">peerInstance</a></code> | <code>string</code> | The peer instance. |

---

##### `peerInstance`<sup>Required</sup> <a name="peerInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas.property.peerInstance"></a>

```typescript
public readonly peerInstance: string;
```

- *Type:* string

The peer instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#peer_instance GoogleFilestoreInstance#peer_instance}

---

### GoogleFilestoreInstanceNetworks <a name="GoogleFilestoreInstanceNetworks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceNetworks: googleFilestoreInstance.GoogleFilestoreInstanceNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.modes">modes</a></code> | <code>string[]</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.network">network</a></code> | <code>string</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.connectMode">connectMode</a></code> | <code>string</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#modes GoogleFilestoreInstance#modes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#network GoogleFilestoreInstance#network}

---

##### `connectMode`<sup>Optional</sup> <a name="connectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#connect_mode GoogleFilestoreInstance#connect_mode}

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#reserved_ip_range GoogleFilestoreInstance#reserved_ip_range}

---

### GoogleFilestoreInstancePerformanceConfig <a name="GoogleFilestoreInstancePerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstancePerformanceConfig: googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.fixedIops">fixedIops</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | fixed_iops block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.iopsPerTb">iopsPerTb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | iops_per_tb block. |

---

##### `fixedIops`<sup>Optional</sup> <a name="fixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.fixedIops"></a>

```typescript
public readonly fixedIops: GoogleFilestoreInstancePerformanceConfigFixedIops;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

fixed_iops block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#fixed_iops GoogleFilestoreInstance#fixed_iops}

---

##### `iopsPerTb`<sup>Optional</sup> <a name="iopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.iopsPerTb"></a>

```typescript
public readonly iopsPerTb: GoogleFilestoreInstancePerformanceConfigIopsPerTb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

iops_per_tb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#iops_per_tb GoogleFilestoreInstance#iops_per_tb}

---

### GoogleFilestoreInstancePerformanceConfigFixedIops <a name="GoogleFilestoreInstancePerformanceConfigFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstancePerformanceConfigFixedIops: googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.property.maxIops">maxIops</a></code> | <code>number</code> | The number of IOPS to provision for the instance. max_iops must be in multiple of 1000. |

---

##### `maxIops`<sup>Optional</sup> <a name="maxIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.property.maxIops"></a>

```typescript
public readonly maxIops: number;
```

- *Type:* number

The number of IOPS to provision for the instance. max_iops must be in multiple of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#max_iops GoogleFilestoreInstance#max_iops}

---

### GoogleFilestoreInstancePerformanceConfigIopsPerTb <a name="GoogleFilestoreInstancePerformanceConfigIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstancePerformanceConfigIopsPerTb: googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb">maxIopsPerTb</a></code> | <code>number</code> | The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000. |

---

##### `maxIopsPerTb`<sup>Optional</sup> <a name="maxIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb"></a>

```typescript
public readonly maxIopsPerTb: number;
```

- *Type:* number

The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000.

The instance max IOPS
will be changed dynamically based on the instance
capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#max_iops_per_tb GoogleFilestoreInstance#max_iops_per_tb}

---

### GoogleFilestoreInstanceTimeouts <a name="GoogleFilestoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

const googleFilestoreInstanceTimeouts: googleFilestoreInstance.GoogleFilestoreInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#create GoogleFilestoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#delete GoogleFilestoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#update GoogleFilestoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#create GoogleFilestoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#delete GoogleFilestoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_filestore_instance#update GoogleFilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFilestoreInstanceEffectiveReplicationList <a name="GoogleFilestoreInstanceEffectiveReplicationList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.get"></a>

```typescript
public get(index: number): GoogleFilestoreInstanceEffectiveReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFilestoreInstanceEffectiveReplicationOutputReference <a name="GoogleFilestoreInstanceEffectiveReplicationOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList">GoogleFilestoreInstanceEffectiveReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication">GoogleFilestoreInstanceEffectiveReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.replicas"></a>

```typescript
public readonly replicas: GoogleFilestoreInstanceEffectiveReplicationReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList">GoogleFilestoreInstanceEffectiveReplicationReplicasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstanceEffectiveReplication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication">GoogleFilestoreInstanceEffectiveReplication</a>

---


### GoogleFilestoreInstanceEffectiveReplicationReplicasList <a name="GoogleFilestoreInstanceEffectiveReplicationReplicasList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.get"></a>

```typescript
public get(index: number): GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference <a name="GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime">lastActiveSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons">stateReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas">GoogleFilestoreInstanceEffectiveReplicationReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastActiveSyncTime`<sup>Required</sup> <a name="lastActiveSyncTime" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime"></a>

```typescript
public readonly lastActiveSyncTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReasons`<sup>Required</sup> <a name="stateReasons" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons"></a>

```typescript
public readonly stateReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstanceEffectiveReplicationReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas">GoogleFilestoreInstanceEffectiveReplicationReplicas</a>

---


### GoogleFilestoreInstanceFileSharesNfsExportOptionsList <a name="GoogleFilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```typescript
public get(index: number): GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceFileSharesNfsExportOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]

---


### GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode">resetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid">resetAnonGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid">resetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges">resetIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode">resetSquashMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessMode` <a name="resetAccessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode"></a>

```typescript
public resetAccessMode(): void
```

##### `resetAnonGid` <a name="resetAnonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid"></a>

```typescript
public resetAnonGid(): void
```

##### `resetAnonUid` <a name="resetAnonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid"></a>

```typescript
public resetAnonUid(): void
```

##### `resetIpRanges` <a name="resetIpRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges"></a>

```typescript
public resetIpRanges(): void
```

##### `resetSquashMode` <a name="resetSquashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode"></a>

```typescript
public resetSquashMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput">anonGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput">anonUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput">ipRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">squashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">anonGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">anonUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">ipRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">squashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `anonGidInput`<sup>Optional</sup> <a name="anonGidInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput"></a>

```typescript
public readonly anonGidInput: number;
```

- *Type:* number

---

##### `anonUidInput`<sup>Optional</sup> <a name="anonUidInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput"></a>

```typescript
public readonly anonUidInput: number;
```

- *Type:* number

---

##### `ipRangesInput`<sup>Optional</sup> <a name="ipRangesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput"></a>

```typescript
public readonly ipRangesInput: string[];
```

- *Type:* string[]

---

##### `squashModeInput`<sup>Optional</sup> <a name="squashModeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput"></a>

```typescript
public readonly squashModeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `anonGid`<sup>Required</sup> <a name="anonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```typescript
public readonly anonGid: number;
```

- *Type:* number

---

##### `anonUid`<sup>Required</sup> <a name="anonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```typescript
public readonly anonUid: number;
```

- *Type:* number

---

##### `ipRanges`<sup>Required</sup> <a name="ipRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```typescript
public readonly ipRanges: string[];
```

- *Type:* string[]

---

##### `squashMode`<sup>Required</sup> <a name="squashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceFileSharesNfsExportOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>

---


### GoogleFilestoreInstanceFileSharesOutputReference <a name="GoogleFilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.putNfsExportOptions">putNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetNfsExportOptions">resetNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetSourceBackup">resetSourceBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfsExportOptions` <a name="putNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.putNfsExportOptions"></a>

```typescript
public putNfsExportOptions(value: IResolvable | GoogleFilestoreInstanceFileSharesNfsExportOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.putNfsExportOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]

---

##### `resetNfsExportOptions` <a name="resetNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetNfsExportOptions"></a>

```typescript
public resetNfsExportOptions(): void
```

##### `resetSourceBackup` <a name="resetSourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetSourceBackup"></a>

```typescript
public resetSourceBackup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">nfsExportOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList">GoogleFilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGbInput">capacityGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput">nfsExportOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackupInput">sourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb">capacityGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfsExportOptions`<sup>Required</sup> <a name="nfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```typescript
public readonly nfsExportOptions: GoogleFilestoreInstanceFileSharesNfsExportOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList">GoogleFilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `capacityGbInput`<sup>Optional</sup> <a name="capacityGbInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGbInput"></a>

```typescript
public readonly capacityGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsExportOptionsInput`<sup>Optional</sup> <a name="nfsExportOptionsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput"></a>

```typescript
public readonly nfsExportOptionsInput: IResolvable | GoogleFilestoreInstanceFileSharesNfsExportOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions">GoogleFilestoreInstanceFileSharesNfsExportOptions</a>[]

---

##### `sourceBackupInput`<sup>Optional</sup> <a name="sourceBackupInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackupInput"></a>

```typescript
public readonly sourceBackupInput: string;
```

- *Type:* string

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```typescript
public readonly capacityGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceBackup`<sup>Required</sup> <a name="sourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstanceFileShares;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---


### GoogleFilestoreInstanceInitialReplicationOutputReference <a name="GoogleFilestoreInstanceInitialReplicationOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.putReplicas">putReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicas` <a name="putReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.putReplicas"></a>

```typescript
public putReplicas(value: IResolvable | GoogleFilestoreInstanceInitialReplicationReplicas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.putReplicas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]

---

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList">GoogleFilestoreInstanceInitialReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicasInput">replicasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicas"></a>

```typescript
public readonly replicas: GoogleFilestoreInstanceInitialReplicationReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList">GoogleFilestoreInstanceInitialReplicationReplicasList</a>

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: IResolvable | GoogleFilestoreInstanceInitialReplicationReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstanceInitialReplication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

---


### GoogleFilestoreInstanceInitialReplicationReplicasList <a name="GoogleFilestoreInstanceInitialReplicationReplicasList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.get"></a>

```typescript
public get(index: number): GoogleFilestoreInstanceInitialReplicationReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceInitialReplicationReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>[]

---


### GoogleFilestoreInstanceInitialReplicationReplicasOutputReference <a name="GoogleFilestoreInstanceInitialReplicationReplicasOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput">peerInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance">peerInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerInstanceInput`<sup>Optional</sup> <a name="peerInstanceInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput"></a>

```typescript
public readonly peerInstanceInput: string;
```

- *Type:* string

---

##### `peerInstance`<sup>Required</sup> <a name="peerInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance"></a>

```typescript
public readonly peerInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceInitialReplicationReplicas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas">GoogleFilestoreInstanceInitialReplicationReplicas</a>

---


### GoogleFilestoreInstanceNetworksList <a name="GoogleFilestoreInstanceNetworksList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.get"></a>

```typescript
public get(index: number): GoogleFilestoreInstanceNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>[]

---


### GoogleFilestoreInstanceNetworksOutputReference <a name="GoogleFilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetConnectMode">resetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectMode` <a name="resetConnectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```typescript
public resetConnectMode(): void
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetReservedIpRange"></a>

```typescript
public resetReservedIpRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectModeInput">connectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modesInput">modesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectMode">connectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `connectModeInput`<sup>Optional</sup> <a name="connectModeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectModeInput"></a>

```typescript
public readonly connectModeInput: string;
```

- *Type:* string

---

##### `modesInput`<sup>Optional</sup> <a name="modesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modesInput"></a>

```typescript
public readonly modesInput: string[];
```

- *Type:* string[]

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput"></a>

```typescript
public readonly reservedIpRangeInput: string;
```

- *Type:* string

---

##### `connectMode`<sup>Required</sup> <a name="connectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks">GoogleFilestoreInstanceNetworks</a>

---


### GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference <a name="GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops">resetMaxIops</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIops` <a name="resetMaxIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops"></a>

```typescript
public resetMaxIops(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput">maxIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops">maxIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxIopsInput`<sup>Optional</sup> <a name="maxIopsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput"></a>

```typescript
public readonly maxIopsInput: number;
```

- *Type:* number

---

##### `maxIops`<sup>Required</sup> <a name="maxIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops"></a>

```typescript
public readonly maxIops: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstancePerformanceConfigFixedIops;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

---


### GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference <a name="GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb">resetMaxIopsPerTb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIopsPerTb` <a name="resetMaxIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb"></a>

```typescript
public resetMaxIopsPerTb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput">maxIopsPerTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb">maxIopsPerTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxIopsPerTbInput`<sup>Optional</sup> <a name="maxIopsPerTbInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput"></a>

```typescript
public readonly maxIopsPerTbInput: number;
```

- *Type:* number

---

##### `maxIopsPerTb`<sup>Required</sup> <a name="maxIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb"></a>

```typescript
public readonly maxIopsPerTb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstancePerformanceConfigIopsPerTb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---


### GoogleFilestoreInstancePerformanceConfigOutputReference <a name="GoogleFilestoreInstancePerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putFixedIops">putFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putIopsPerTb">putIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetFixedIops">resetFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb">resetIopsPerTb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedIops` <a name="putFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putFixedIops"></a>

```typescript
public putFixedIops(value: GoogleFilestoreInstancePerformanceConfigFixedIops): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putFixedIops.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

---

##### `putIopsPerTb` <a name="putIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putIopsPerTb"></a>

```typescript
public putIopsPerTb(value: GoogleFilestoreInstancePerformanceConfigIopsPerTb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putIopsPerTb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `resetFixedIops` <a name="resetFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetFixedIops"></a>

```typescript
public resetFixedIops(): void
```

##### `resetIopsPerTb` <a name="resetIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb"></a>

```typescript
public resetIopsPerTb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIops">fixedIops</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference">GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb">iopsPerTb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference">GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput">fixedIopsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput">iopsPerTbInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedIops`<sup>Required</sup> <a name="fixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIops"></a>

```typescript
public readonly fixedIops: GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference">GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference</a>

---

##### `iopsPerTb`<sup>Required</sup> <a name="iopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb"></a>

```typescript
public readonly iopsPerTb: GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference">GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference</a>

---

##### `fixedIopsInput`<sup>Optional</sup> <a name="fixedIopsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput"></a>

```typescript
public readonly fixedIopsInput: GoogleFilestoreInstancePerformanceConfigFixedIops;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

---

##### `iopsPerTbInput`<sup>Optional</sup> <a name="iopsPerTbInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput"></a>

```typescript
public readonly iopsPerTbInput: GoogleFilestoreInstancePerformanceConfigIopsPerTb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFilestoreInstancePerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

---


### GoogleFilestoreInstanceTimeoutsOutputReference <a name="GoogleFilestoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFilestoreInstance } from '@cdktf/provider-google-beta'

new googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFilestoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

---



