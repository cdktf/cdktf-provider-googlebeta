# `googleGkeonpremVmwareNodePool` Submodule <a name="`googleGkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareNodePool <a name="GoogleGkeonpremVmwareNodePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool(scope: Construct, id: string, config: GoogleGkeonpremVmwareNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig">GoogleGkeonpremVmwareNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig">GoogleGkeonpremVmwareNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling">putNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetNodePoolAutoscaling">resetNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig"></a>

```typescript
public putConfig(value: GoogleGkeonpremVmwareNodePoolConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---

##### `putNodePoolAutoscaling` <a name="putNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```typescript
public putNodePoolAutoscaling(value: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeonpremVmwareNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodePoolAutoscaling` <a name="resetNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```typescript
public resetNodePoolAutoscaling(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeonpremVmwareNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeonpremVmwareNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremVmwareNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference">GoogleGkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.onPremVersion">onPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList">GoogleGkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference">GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">nodePoolAutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareClusterInput">vmwareClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareCluster">vmwareCluster</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.config"></a>

```typescript
public readonly config: GoogleGkeonpremVmwareNodePoolConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference">GoogleGkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `nodePoolAutoscaling`<sup>Required</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```typescript
public readonly nodePoolAutoscaling: GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.onPremVersion"></a>

```typescript
public readonly onPremVersion: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.status"></a>

```typescript
public readonly status: GoogleGkeonpremVmwareNodePoolStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList">GoogleGkeonpremVmwareNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference">GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.configInput"></a>

```typescript
public readonly configInput: GoogleGkeonpremVmwareNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePoolAutoscalingInput`<sup>Optional</sup> <a name="nodePoolAutoscalingInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```typescript
public readonly nodePoolAutoscalingInput: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeonpremVmwareNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

---

##### `vmwareClusterInput`<sup>Optional</sup> <a name="vmwareClusterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```typescript
public readonly vmwareClusterInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareCluster"></a>

```typescript
public readonly vmwareCluster: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareNodePoolConfig <a name="GoogleGkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolConfig: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.name">name</a></code> | <code>string</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.vmwareCluster">vmwareCluster</a></code> | <code>string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.config"></a>

```typescript
public readonly config: GoogleGkeonpremVmwareNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#config GoogleGkeonpremVmwareNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#location GoogleGkeonpremVmwareNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#name GoogleGkeonpremVmwareNodePool#name}

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```typescript
public readonly vmwareCluster: string;
```

- *Type:* string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#vmware_cluster GoogleGkeonpremVmwareNodePool#vmware_cluster}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#annotations GoogleGkeonpremVmwareNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#display_name GoogleGkeonpremVmwareNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodePoolAutoscaling`<sup>Optional</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```typescript
public readonly nodePoolAutoscaling: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#node_pool_autoscaling GoogleGkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeonpremVmwareNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#timeouts GoogleGkeonpremVmwareNodePool#timeouts}

---

### GoogleGkeonpremVmwareNodePoolConfigA <a name="GoogleGkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolConfigA: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.imageType">imageType</a></code> | <code>string</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.cpus">cpus</a></code> | <code>number</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">enableLoadBalancer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.image">image</a></code> | <code>string</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.memoryMb">memoryMb</a></code> | <code>number</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.replicas">replicas</a></code> | <code>number</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]</code> | taints block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | vsphere_config block. |

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

The OS image to be used for each node in a node pool.

Currently 'cos', 'cos_cgv2', 'ubuntu', 'ubuntu_cgv2', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#image_type GoogleGkeonpremVmwareNodePool#image_type}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#boot_disk_size_gb GoogleGkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#cpus GoogleGkeonpremVmwareNodePool#cpus}

---

##### `enableLoadBalancer`<sup>Optional</sup> <a name="enableLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```typescript
public readonly enableLoadBalancer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#enable_load_balancer GoogleGkeonpremVmwareNodePool#enable_load_balancer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#image GoogleGkeonpremVmwareNodePool#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#labels GoogleGkeonpremVmwareNodePool#labels}

---

##### `memoryMb`<sup>Optional</sup> <a name="memoryMb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#memory_mb GoogleGkeonpremVmwareNodePool#memory_mb}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#replicas GoogleGkeonpremVmwareNodePool#replicas}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.taints"></a>

```typescript
public readonly taints: IResolvable | GoogleGkeonpremVmwareNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#taints GoogleGkeonpremVmwareNodePool#taints}

---

##### `vsphereConfig`<sup>Optional</sup> <a name="vsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.vsphereConfig"></a>

```typescript
public readonly vsphereConfig: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

vsphere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#vsphere_config GoogleGkeonpremVmwareNodePool#vsphere_config}

---

### GoogleGkeonpremVmwareNodePoolConfigTaints <a name="GoogleGkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolConfigTaints: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#key GoogleGkeonpremVmwareNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#value GoogleGkeonpremVmwareNodePool#value}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#effect GoogleGkeonpremVmwareNodePool#effect}

---

### GoogleGkeonpremVmwareNodePoolConfigVsphereConfig <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolConfigVsphereConfig: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore">datastore</a></code> | <code>string</code> | The name of the vCenter datastore. Inherited from the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups">hostGroups</a></code> | <code>string[]</code> | Vsphere host groups to apply to all VMs in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]</code> | tags block. |

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

The name of the vCenter datastore. Inherited from the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#datastore GoogleGkeonpremVmwareNodePool#datastore}

---

##### `hostGroups`<sup>Optional</sup> <a name="hostGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups"></a>

```typescript
public readonly hostGroups: string[];
```

- *Type:* string[]

Vsphere host groups to apply to all VMs in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#host_groups GoogleGkeonpremVmwareNodePool#host_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#tags GoogleGkeonpremVmwareNodePool#tags}

---

### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolConfigVsphereConfigTags: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category">category</a></code> | <code>string</code> | The Vsphere tag category. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag">tag</a></code> | <code>string</code> | The Vsphere tag name. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Vsphere tag category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#category GoogleGkeonpremVmwareNodePool#category}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The Vsphere tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#tag GoogleGkeonpremVmwareNodePool#tag}

---

### GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolNodePoolAutoscaling: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">minReplicas</a></code> | <code>number</code> | Minimum number of replicas in the NodePool. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#max_replicas GoogleGkeonpremVmwareNodePool#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#min_replicas GoogleGkeonpremVmwareNodePool#min_replicas}

---

### GoogleGkeonpremVmwareNodePoolStatus <a name="GoogleGkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolStatus: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus = { ... }
```


### GoogleGkeonpremVmwareNodePoolStatusConditions <a name="GoogleGkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolStatusConditions: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions = { ... }
```


### GoogleGkeonpremVmwareNodePoolTimeouts <a name="GoogleGkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareNodePoolTimeouts: googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareNodePoolConfigAOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig">putVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">resetEnableLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">resetMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig">resetVsphereConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | GoogleGkeonpremVmwareNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]

---

##### `putVsphereConfig` <a name="putVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig"></a>

```typescript
public putVsphereConfig(value: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```typescript
public resetBootDiskSizeGb(): void
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```typescript
public resetCpus(): void
```

##### `resetEnableLoadBalancer` <a name="resetEnableLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```typescript
public resetEnableLoadBalancer(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMemoryMb` <a name="resetMemoryMb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```typescript
public resetMemoryMb(): void
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetVsphereConfig` <a name="resetVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig"></a>

```typescript
public resetVsphereConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList">GoogleGkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">cpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">enableLoadBalancerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">memoryMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput">vsphereConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">cpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">enableLoadBalancer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">memoryMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```typescript
public readonly taints: GoogleGkeonpremVmwareNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList">GoogleGkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `vsphereConfig`<sup>Required</sup> <a name="vsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```typescript
public readonly vsphereConfig: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```typescript
public readonly bootDiskSizeGbInput: number;
```

- *Type:* number

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```typescript
public readonly cpusInput: number;
```

- *Type:* number

---

##### `enableLoadBalancerInput`<sup>Optional</sup> <a name="enableLoadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```typescript
public readonly enableLoadBalancerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memoryMbInput`<sup>Optional</sup> <a name="memoryMbInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```typescript
public readonly memoryMbInput: number;
```

- *Type:* number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | GoogleGkeonpremVmwareNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]

---

##### `vsphereConfigInput`<sup>Optional</sup> <a name="vsphereConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput"></a>

```typescript
public readonly vsphereConfigInput: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

---

##### `enableLoadBalancer`<sup>Required</sup> <a name="enableLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```typescript
public readonly enableLoadBalancer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---


### GoogleGkeonpremVmwareNodePoolConfigTaintsList <a name="GoogleGkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>[]

---


### GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups">resetHostGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]

---

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore"></a>

```typescript
public resetDatastore(): void
```

##### `resetHostGroups` <a name="resetHostGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups"></a>

```typescript
public resetHostGroups(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput">hostGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups">hostGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```typescript
public readonly tags: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: string;
```

- *Type:* string

---

##### `hostGroupsInput`<sup>Optional</sup> <a name="hostGroupsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput"></a>

```typescript
public readonly hostGroupsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

---

##### `hostGroups`<sup>Required</sup> <a name="hostGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups"></a>

```typescript
public readonly hostGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>[]

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>

---


### GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">minReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```typescript
public readonly maxReplicasInput: number;
```

- *Type:* number

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```typescript
public readonly minReplicasInput: number;
```

- *Type:* number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GoogleGkeonpremVmwareNodePoolStatusConditionsList <a name="GoogleGkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions">GoogleGkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareNodePoolStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions">GoogleGkeonpremVmwareNodePoolStatusConditions</a>

---


### GoogleGkeonpremVmwareNodePoolStatusList <a name="GoogleGkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareNodePoolStatusOutputReference <a name="GoogleGkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList">GoogleGkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus">GoogleGkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleGkeonpremVmwareNodePoolStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList">GoogleGkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareNodePoolStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus">GoogleGkeonpremVmwareNodePoolStatus</a>

---


### GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareNodePool } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

---



