# `googleAlloydbInstance` Submodule <a name="`googleAlloydbInstance` Submodule" id="@cdktf/provider-google-beta.googleAlloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbInstance <a name="GoogleAlloydbInstance" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstance(scope: Construct, id: string, config: GoogleAlloydbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig">GoogleAlloydbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig">GoogleAlloydbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig">putClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig">putMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig">putQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig">putReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAvailabilityType">resetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetClientConnectionConfig">resetClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetGceZone">resetGceZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetMachineConfig">resetMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetQueryInsightsConfig">resetQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetReadPoolConfig">resetReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientConnectionConfig` <a name="putClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig"></a>

```typescript
public putClientConnectionConfig(value: GoogleAlloydbInstanceClientConnectionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---

##### `putMachineConfig` <a name="putMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig"></a>

```typescript
public putMachineConfig(value: GoogleAlloydbInstanceMachineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---

##### `putQueryInsightsConfig` <a name="putQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig"></a>

```typescript
public putQueryInsightsConfig(value: GoogleAlloydbInstanceQueryInsightsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---

##### `putReadPoolConfig` <a name="putReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig"></a>

```typescript
public putReadPoolConfig(value: GoogleAlloydbInstanceReadPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAlloydbInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAvailabilityType` <a name="resetAvailabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAvailabilityType"></a>

```typescript
public resetAvailabilityType(): void
```

##### `resetClientConnectionConfig` <a name="resetClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetClientConnectionConfig"></a>

```typescript
public resetClientConnectionConfig(): void
```

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDatabaseFlags"></a>

```typescript
public resetDatabaseFlags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGceZone` <a name="resetGceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetGceZone"></a>

```typescript
public resetGceZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMachineConfig` <a name="resetMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetMachineConfig"></a>

```typescript
public resetMachineConfig(): void
```

##### `resetQueryInsightsConfig` <a name="resetQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetQueryInsightsConfig"></a>

```typescript
public resetQueryInsightsConfig(): void
```

##### `resetReadPoolConfig` <a name="resetReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetReadPoolConfig"></a>

```typescript
public resetReadPoolConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

googleAlloydbInstance.GoogleAlloydbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAlloydbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference">GoogleAlloydbInstanceMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference">GoogleAlloydbInstanceQueryInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference">GoogleAlloydbInstanceReadPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference">GoogleAlloydbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityTypeInput">availabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfigInput">clientConnectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZoneInput">gceZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfigInput">machineConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfigInput">queryInsightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfigInput">readPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityType">availabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlags">databaseFlags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZone">gceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientConnectionConfig`<sup>Required</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfig"></a>

```typescript
public readonly clientConnectionConfig: GoogleAlloydbInstanceClientConnectionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `machineConfig`<sup>Required</sup> <a name="machineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfig"></a>

```typescript
public readonly machineConfig: GoogleAlloydbInstanceMachineConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference">GoogleAlloydbInstanceMachineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryInsightsConfig`<sup>Required</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfig"></a>

```typescript
public readonly queryInsightsConfig: GoogleAlloydbInstanceQueryInsightsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference">GoogleAlloydbInstanceQueryInsightsConfigOutputReference</a>

---

##### `readPoolConfig`<sup>Required</sup> <a name="readPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfig"></a>

```typescript
public readonly readPoolConfig: GoogleAlloydbInstanceReadPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference">GoogleAlloydbInstanceReadPoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAlloydbInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference">GoogleAlloydbInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityTypeInput`<sup>Optional</sup> <a name="availabilityTypeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityTypeInput"></a>

```typescript
public readonly availabilityTypeInput: string;
```

- *Type:* string

---

##### `clientConnectionConfigInput`<sup>Optional</sup> <a name="clientConnectionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfigInput"></a>

```typescript
public readonly clientConnectionConfigInput: GoogleAlloydbInstanceClientConnectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlagsInput"></a>

```typescript
public readonly databaseFlagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gceZoneInput`<sup>Optional</sup> <a name="gceZoneInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZoneInput"></a>

```typescript
public readonly gceZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineConfigInput`<sup>Optional</sup> <a name="machineConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfigInput"></a>

```typescript
public readonly machineConfigInput: GoogleAlloydbInstanceMachineConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---

##### `queryInsightsConfigInput`<sup>Optional</sup> <a name="queryInsightsConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfigInput"></a>

```typescript
public readonly queryInsightsConfigInput: GoogleAlloydbInstanceQueryInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---

##### `readPoolConfigInput`<sup>Optional</sup> <a name="readPoolConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfigInput"></a>

```typescript
public readonly readPoolConfigInput: GoogleAlloydbInstanceReadPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAlloydbInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gceZone`<sup>Required</sup> <a name="gceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZone"></a>

```typescript
public readonly gceZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbInstanceClientConnectionConfig <a name="GoogleAlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceClientConnectionConfig: googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.requireConnectors">requireConnectors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configuration to enforce connectors only (ex: AuthProxy) connections to the database. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | ssl_config block. |

---

##### `requireConnectors`<sup>Optional</sup> <a name="requireConnectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.requireConnectors"></a>

```typescript
public readonly requireConnectors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#require_connectors GoogleAlloydbInstance#require_connectors}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleAlloydbInstanceClientConnectionConfigSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#ssl_config GoogleAlloydbInstance#ssl_config}

---

### GoogleAlloydbInstanceClientConnectionConfigSslConfig <a name="GoogleAlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceClientConnectionConfigSslConfig: googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.property.sslMode">sslMode</a></code> | <code>string</code> | SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]. |

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#ssl_mode GoogleAlloydbInstance#ssl_mode}

---

### GoogleAlloydbInstanceConfig <a name="GoogleAlloydbInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceConfig: googleAlloydbInstance.GoogleAlloydbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.cluster">cluster</a></code> | <code>string</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.availabilityType">availabilityType</a></code> | <code>string</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.databaseFlags">databaseFlags</a></code> | <code>{[ key: string ]: string}</code> | Database flags. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.gceZone">gceZone</a></code> | <code>string</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#cluster GoogleAlloydbInstance#cluster}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#instance_id GoogleAlloydbInstance#instance_id}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#instance_type GoogleAlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#annotations GoogleAlloydbInstance#annotations}

---

##### `availabilityType`<sup>Optional</sup> <a name="availabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#availability_type GoogleAlloydbInstance#availability_type}

---

##### `clientConnectionConfig`<sup>Optional</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.clientConnectionConfig"></a>

```typescript
public readonly clientConnectionConfig: GoogleAlloydbInstanceClientConnectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#client_connection_config GoogleAlloydbInstance#client_connection_config}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#database_flags GoogleAlloydbInstance#database_flags}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#display_name GoogleAlloydbInstance#display_name}

---

##### `gceZone`<sup>Optional</sup> <a name="gceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.gceZone"></a>

```typescript
public readonly gceZone: string;
```

- *Type:* string

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#gce_zone GoogleAlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#labels GoogleAlloydbInstance#labels}

---

##### `machineConfig`<sup>Optional</sup> <a name="machineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.machineConfig"></a>

```typescript
public readonly machineConfig: GoogleAlloydbInstanceMachineConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#machine_config GoogleAlloydbInstance#machine_config}

---

##### `queryInsightsConfig`<sup>Optional</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.queryInsightsConfig"></a>

```typescript
public readonly queryInsightsConfig: GoogleAlloydbInstanceQueryInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#query_insights_config GoogleAlloydbInstance#query_insights_config}

---

##### `readPoolConfig`<sup>Optional</sup> <a name="readPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.readPoolConfig"></a>

```typescript
public readonly readPoolConfig: GoogleAlloydbInstanceReadPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#read_pool_config GoogleAlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAlloydbInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#timeouts GoogleAlloydbInstance#timeouts}

---

### GoogleAlloydbInstanceMachineConfig <a name="GoogleAlloydbInstanceMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceMachineConfig: googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.property.cpuCount">cpuCount</a></code> | <code>number</code> | The number of CPU's in the VM instance. |

---

##### `cpuCount`<sup>Optional</sup> <a name="cpuCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#cpu_count GoogleAlloydbInstance#cpu_count}

---

### GoogleAlloydbInstanceQueryInsightsConfig <a name="GoogleAlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceQueryInsightsConfig: googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordApplicationTags">recordApplicationTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordClientAddress">recordClientAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Record client address for an instance. Client address is PII information. This flag is turned "on" by default. |

---

##### `queryPlansPerMinute`<sup>Optional</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

##### `queryStringLength`<sup>Optional</sup> <a name="queryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#query_string_length GoogleAlloydbInstance#query_string_length}

---

##### `recordApplicationTags`<sup>Optional</sup> <a name="recordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

##### `recordClientAddress`<sup>Optional</sup> <a name="recordClientAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#record_client_address GoogleAlloydbInstance#record_client_address}

---

### GoogleAlloydbInstanceReadPoolConfig <a name="GoogleAlloydbInstanceReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceReadPoolConfig: googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Read capacity, i.e. number of nodes in a read pool instance. |

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#node_count GoogleAlloydbInstance#node_count}

---

### GoogleAlloydbInstanceTimeouts <a name="GoogleAlloydbInstanceTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

const googleAlloydbInstanceTimeouts: googleAlloydbInstance.GoogleAlloydbInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbInstanceClientConnectionConfigOutputReference <a name="GoogleAlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors">resetRequireConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: GoogleAlloydbInstanceClientConnectionConfigSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `resetRequireConnectors` <a name="resetRequireConnectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors"></a>

```typescript
public resetRequireConnectors(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput">requireConnectorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">requireConnectors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference</a>

---

##### `requireConnectorsInput`<sup>Optional</sup> <a name="requireConnectorsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput"></a>

```typescript
public readonly requireConnectorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: GoogleAlloydbInstanceClientConnectionConfigSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `requireConnectors`<sup>Required</sup> <a name="requireConnectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```typescript
public readonly requireConnectors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbInstanceClientConnectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---


### GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbInstanceClientConnectionConfigSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---


### GoogleAlloydbInstanceMachineConfigOutputReference <a name="GoogleAlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resetCpuCount">resetCpuCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCount` <a name="resetCpuCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resetCpuCount"></a>

```typescript
public resetCpuCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCountInput"></a>

```typescript
public readonly cpuCountInput: number;
```

- *Type:* number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbInstanceMachineConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---


### GoogleAlloydbInstanceQueryInsightsConfigOutputReference <a name="GoogleAlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute">resetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength">resetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags">resetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress">resetRecordClientAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryPlansPerMinute` <a name="resetQueryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```typescript
public resetQueryPlansPerMinute(): void
```

##### `resetQueryStringLength` <a name="resetQueryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength"></a>

```typescript
public resetQueryStringLength(): void
```

##### `resetRecordApplicationTags` <a name="resetRecordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```typescript
public resetRecordApplicationTags(): void
```

##### `resetRecordClientAddress` <a name="resetRecordClientAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress"></a>

```typescript
public resetRecordClientAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput">queryPlansPerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput">queryStringLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput">recordApplicationTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput">recordClientAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryPlansPerMinuteInput`<sup>Optional</sup> <a name="queryPlansPerMinuteInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```typescript
public readonly queryPlansPerMinuteInput: number;
```

- *Type:* number

---

##### `queryStringLengthInput`<sup>Optional</sup> <a name="queryStringLengthInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```typescript
public readonly queryStringLengthInput: number;
```

- *Type:* number

---

##### `recordApplicationTagsInput`<sup>Optional</sup> <a name="recordApplicationTagsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```typescript
public readonly recordApplicationTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordClientAddressInput`<sup>Optional</sup> <a name="recordClientAddressInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```typescript
public readonly recordClientAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbInstanceQueryInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---


### GoogleAlloydbInstanceReadPoolConfigOutputReference <a name="GoogleAlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAlloydbInstanceReadPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---


### GoogleAlloydbInstanceTimeoutsOutputReference <a name="GoogleAlloydbInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAlloydbInstance } from '@cdktf/provider-google-beta'

new googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAlloydbInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

---



