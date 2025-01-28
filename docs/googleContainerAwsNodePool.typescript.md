# `googleContainerAwsNodePool` Submodule <a name="`googleContainerAwsNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAwsNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAwsNodePool <a name="GoogleContainerAwsNodePool" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool google_container_aws_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePool(scope: Construct, id: string, config: GoogleContainerAwsNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig">GoogleContainerAwsNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig">GoogleContainerAwsNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putKubeletConfig">putKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint">putMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putUpdateSettings">putUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetKubeletConfig">resetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetUpdateSettings">resetUpdateSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling"></a>

```typescript
public putAutoscaling(value: GoogleContainerAwsNodePoolAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig"></a>

```typescript
public putConfig(value: GoogleContainerAwsNodePoolConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---

##### `putKubeletConfig` <a name="putKubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putKubeletConfig"></a>

```typescript
public putKubeletConfig(value: GoogleContainerAwsNodePoolKubeletConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putManagement"></a>

```typescript
public putManagement(value: GoogleContainerAwsNodePoolManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

---

##### `putMaxPodsConstraint` <a name="putMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint"></a>

```typescript
public putMaxPodsConstraint(value: GoogleContainerAwsNodePoolMaxPodsConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContainerAwsNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

---

##### `putUpdateSettings` <a name="putUpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putUpdateSettings"></a>

```typescript
public putUpdateSettings(value: GoogleContainerAwsNodePoolUpdateSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubeletConfig` <a name="resetKubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetKubeletConfig"></a>

```typescript
public resetKubeletConfig(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateSettings` <a name="resetUpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetUpdateSettings"></a>

```typescript
public resetUpdateSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAwsNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleContainerAwsNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAwsNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAwsNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAwsNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference">GoogleContainerAwsNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference">GoogleContainerAwsNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference">GoogleContainerAwsNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference">GoogleContainerAwsNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference">GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference">GoogleContainerAwsNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettings">updateSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfigInput">kubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraintInput">maxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettingsInput">updateSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscaling"></a>

```typescript
public readonly autoscaling: GoogleContainerAwsNodePoolAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference">GoogleContainerAwsNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.config"></a>

```typescript
public readonly config: GoogleContainerAwsNodePoolConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference">GoogleContainerAwsNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `kubeletConfig`<sup>Required</sup> <a name="kubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfig"></a>

```typescript
public readonly kubeletConfig: GoogleContainerAwsNodePoolKubeletConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference">GoogleContainerAwsNodePoolKubeletConfigOutputReference</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.management"></a>

```typescript
public readonly management: GoogleContainerAwsNodePoolManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference">GoogleContainerAwsNodePoolManagementOutputReference</a>

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraint"></a>

```typescript
public readonly maxPodsConstraint: GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference">GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAwsNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference">GoogleContainerAwsNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateSettings`<sup>Required</sup> <a name="updateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettings"></a>

```typescript
public readonly updateSettings: GoogleContainerAwsNodePoolUpdateSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscalingInput"></a>

```typescript
public readonly autoscalingInput: GoogleContainerAwsNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.configInput"></a>

```typescript
public readonly configInput: GoogleContainerAwsNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubeletConfigInput`<sup>Optional</sup> <a name="kubeletConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.kubeletConfigInput"></a>

```typescript
public readonly kubeletConfigInput: GoogleContainerAwsNodePoolKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.managementInput"></a>

```typescript
public readonly managementInput: GoogleContainerAwsNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

---

##### `maxPodsConstraintInput`<sup>Optional</sup> <a name="maxPodsConstraintInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraintInput"></a>

```typescript
public readonly maxPodsConstraintInput: GoogleContainerAwsNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContainerAwsNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

---

##### `updateSettingsInput`<sup>Optional</sup> <a name="updateSettingsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateSettingsInput"></a>

```typescript
public readonly updateSettingsInput: GoogleContainerAwsNodePoolUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAwsNodePoolAutoscaling <a name="GoogleContainerAwsNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolAutoscaling: googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Maximum number of nodes in the NodePool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Maximum number of nodes in the NodePool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#max_node_count GoogleContainerAwsNodePool#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#min_node_count GoogleContainerAwsNodePool#min_node_count}

---

### GoogleContainerAwsNodePoolConfig <a name="GoogleContainerAwsNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfig: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.cluster">cluster</a></code> | <code>string</code> | The awsCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.name">name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The subnet where the node pool node run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.version">version</a></code> | <code>string</code> | The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#id GoogleContainerAwsNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.updateSettings">updateSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a></code> | update_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.autoscaling"></a>

```typescript
public readonly autoscaling: GoogleContainerAwsNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#autoscaling GoogleContainerAwsNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The awsCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#cluster GoogleContainerAwsNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.config"></a>

```typescript
public readonly config: GoogleContainerAwsNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#config GoogleContainerAwsNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#location GoogleContainerAwsNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.maxPodsConstraint"></a>

```typescript
public readonly maxPodsConstraint: GoogleContainerAwsNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#max_pods_constraint GoogleContainerAwsNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#name GoogleContainerAwsNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The subnet where the node pool node run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#subnet_id GoogleContainerAwsNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#version GoogleContainerAwsNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#annotations GoogleContainerAwsNodePool#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#id GoogleContainerAwsNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeletConfig`<sup>Optional</sup> <a name="kubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.kubeletConfig"></a>

```typescript
public readonly kubeletConfig: GoogleContainerAwsNodePoolKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#kubelet_config GoogleContainerAwsNodePool#kubelet_config}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.management"></a>

```typescript
public readonly management: GoogleContainerAwsNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#management GoogleContainerAwsNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#project GoogleContainerAwsNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAwsNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#timeouts GoogleContainerAwsNodePool#timeouts}

---

##### `updateSettings`<sup>Optional</sup> <a name="updateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.updateSettings"></a>

```typescript
public readonly updateSettings: GoogleContainerAwsNodePoolUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

update_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#update_settings GoogleContainerAwsNodePool#update_settings}

---

### GoogleContainerAwsNodePoolConfigA <a name="GoogleContainerAwsNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigA: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | The name of the AWS IAM role assigned to nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection">autoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | autoscaling_metrics_collection block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.imageType">imageType</a></code> | <code>string</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instancePlacement">instancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | instance_placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instanceType">instanceType</a></code> | <code>string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.spotConfig">spotConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | spot_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]</code> | taints block. |

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.configEncryption"></a>

```typescript
public readonly configEncryption: GoogleContainerAwsNodePoolConfigConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#config_encryption GoogleContainerAwsNodePool#config_encryption}

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

The name of the AWS IAM role assigned to nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#iam_instance_profile GoogleContainerAwsNodePool#iam_instance_profile}

---

##### `autoscalingMetricsCollection`<sup>Optional</sup> <a name="autoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection"></a>

```typescript
public readonly autoscalingMetricsCollection: GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

autoscaling_metrics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#autoscaling_metrics_collection GoogleContainerAwsNodePool#autoscaling_metrics_collection}

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#image_type GoogleContainerAwsNodePool#image_type}

---

##### `instancePlacement`<sup>Optional</sup> <a name="instancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instancePlacement"></a>

```typescript
public readonly instancePlacement: GoogleContainerAwsNodePoolConfigInstancePlacement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

instance_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#instance_placement GoogleContainerAwsNodePool#instance_placement}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#instance_type GoogleContainerAwsNodePool#instance_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#labels GoogleContainerAwsNodePool#labels}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleContainerAwsNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#proxy_config GoogleContainerAwsNodePool#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.rootVolume"></a>

```typescript
public readonly rootVolume: GoogleContainerAwsNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#root_volume GoogleContainerAwsNodePool#root_volume}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Optional.

The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#security_group_ids GoogleContainerAwsNodePool#security_group_ids}

---

##### `spotConfig`<sup>Optional</sup> <a name="spotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.spotConfig"></a>

```typescript
public readonly spotConfig: GoogleContainerAwsNodePoolConfigSpotConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

spot_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#spot_config GoogleContainerAwsNodePool#spot_config}

---

##### `sshConfig`<sup>Optional</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.sshConfig"></a>

```typescript
public readonly sshConfig: GoogleContainerAwsNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#ssh_config GoogleContainerAwsNodePool#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#tags GoogleContainerAwsNodePool#tags}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.taints"></a>

```typescript
public readonly taints: IResolvable | GoogleContainerAwsNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#taints GoogleContainerAwsNodePool#taints}

---

### GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection <a name="GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigAutoscalingMetricsCollection: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity">granularity</a></code> | <code>string</code> | The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics">metrics</a></code> | <code>string[]</code> | The metrics to enable. |

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#granularity GoogleContainerAwsNodePool#granularity}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

The metrics to enable.

For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#metrics GoogleContainerAwsNodePool#metrics}

---

### GoogleContainerAwsNodePoolConfigConfigEncryption <a name="GoogleContainerAwsNodePoolConfigConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigConfigEncryption: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt node pool configuration. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt node pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}

---

### GoogleContainerAwsNodePoolConfigInstancePlacement <a name="GoogleContainerAwsNodePoolConfigInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigInstancePlacement: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.property.tenancy">tenancy</a></code> | <code>string</code> | The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST. |

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#tenancy GoogleContainerAwsNodePool#tenancy}

---

### GoogleContainerAwsNodePoolConfigProxyConfig <a name="GoogleContainerAwsNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigProxyConfig: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretVersion">secretVersion</a></code> | <code>string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#secret_arn GoogleContainerAwsNodePool#secret_arn}

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#secret_version GoogleContainerAwsNodePool#secret_version}

---

### GoogleContainerAwsNodePoolConfigRootVolume <a name="GoogleContainerAwsNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigRootVolume: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.iops">iops</a></code> | <code>number</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.throughput">throughput</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#iops GoogleContainerAwsNodePool#iops}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#size_gib GoogleContainerAwsNodePool#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#throughput GoogleContainerAwsNodePool#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#volume_type GoogleContainerAwsNodePool#volume_type}

---

### GoogleContainerAwsNodePoolConfigSpotConfig <a name="GoogleContainerAwsNodePoolConfigSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigSpotConfig: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | List of AWS EC2 instance types for creating a spot node pool's nodes. |

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

List of AWS EC2 instance types for creating a spot node pool's nodes.

The specified instance types must have the same number of CPUs and memory. You can use the Amazon EC2 Instance Selector tool (https://github.com/aws/amazon-ec2-instance-selector) to choose instance types with matching CPU and memory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#instance_types GoogleContainerAwsNodePool#instance_types}

---

### GoogleContainerAwsNodePoolConfigSshConfig <a name="GoogleContainerAwsNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigSshConfig: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#ec2_key_pair GoogleContainerAwsNodePool#ec2_key_pair}

---

### GoogleContainerAwsNodePoolConfigTaints <a name="GoogleContainerAwsNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolConfigTaints: googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key for the taint. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value for the taint. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#effect GoogleContainerAwsNodePool#effect}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#key GoogleContainerAwsNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#value GoogleContainerAwsNodePool#value}

---

### GoogleContainerAwsNodePoolKubeletConfig <a name="GoogleContainerAwsNodePoolKubeletConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolKubeletConfig: googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to enable CPU CFS quota. Defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>string</code> | Optional. The CPU CFS quota period to use for the node. Defaults to "100ms". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>string</code> | The CpuManagerPolicy to use for the node. Defaults to "none". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.podPidsLimit">podPidsLimit</a></code> | <code>number</code> | Optional. |

---

##### `cpuCfsQuota`<sup>Optional</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuota"></a>

```typescript
public readonly cpuCfsQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to enable CPU CFS quota. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#cpu_cfs_quota GoogleContainerAwsNodePool#cpu_cfs_quota}

---

##### `cpuCfsQuotaPeriod`<sup>Optional</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```typescript
public readonly cpuCfsQuotaPeriod: string;
```

- *Type:* string

Optional. The CPU CFS quota period to use for the node. Defaults to "100ms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#cpu_cfs_quota_period GoogleContainerAwsNodePool#cpu_cfs_quota_period}

---

##### `cpuManagerPolicy`<sup>Optional</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```typescript
public readonly cpuManagerPolicy: string;
```

- *Type:* string

The CpuManagerPolicy to use for the node. Defaults to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#cpu_manager_policy GoogleContainerAwsNodePool#cpu_manager_policy}

---

##### `podPidsLimit`<sup>Optional</sup> <a name="podPidsLimit" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig.property.podPidsLimit"></a>

```typescript
public readonly podPidsLimit: number;
```

- *Type:* number

Optional.

The maximum number of PIDs in each pod running on the node. The limit scales automatically based on underlying machine size if left unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#pod_pids_limit GoogleContainerAwsNodePool#pod_pids_limit}

---

### GoogleContainerAwsNodePoolManagement <a name="GoogleContainerAwsNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolManagement: googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#auto_repair GoogleContainerAwsNodePool#auto_repair}

---

### GoogleContainerAwsNodePoolMaxPodsConstraint <a name="GoogleContainerAwsNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolMaxPodsConstraint: googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum number of pods to schedule on a single node. |

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#max_pods_per_node GoogleContainerAwsNodePool#max_pods_per_node}

---

### GoogleContainerAwsNodePoolTimeouts <a name="GoogleContainerAwsNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolTimeouts: googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}.

---

### GoogleContainerAwsNodePoolUpdateSettings <a name="GoogleContainerAwsNodePoolUpdateSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolUpdateSettings: googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings.property.surgeSettings">surgeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | surge_settings block. |

---

##### `surgeSettings`<sup>Optional</sup> <a name="surgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings.property.surgeSettings"></a>

```typescript
public readonly surgeSettings: GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

surge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#surge_settings GoogleContainerAwsNodePool#surge_settings}

---

### GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings <a name="GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

const googleContainerAwsNodePoolUpdateSettingsSurgeSettings: googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxSurge">maxSurge</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | Optional. |

---

##### `maxSurge`<sup>Optional</sup> <a name="maxSurge" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxSurge"></a>

```typescript
public readonly maxSurge: number;
```

- *Type:* number

Optional.

The maximum number of nodes that can be created beyond the current size of the node pool during the update process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#max_surge GoogleContainerAwsNodePool#max_surge}

---

##### `maxUnavailable`<sup>Optional</sup> <a name="maxUnavailable" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

Optional.

The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_aws_node_pool#max_unavailable GoogleContainerAwsNodePool#max_unavailable}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAwsNodePoolAutoscalingOutputReference <a name="GoogleContainerAwsNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---


### GoogleContainerAwsNodePoolConfigAOutputReference <a name="GoogleContainerAwsNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection">putAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption">putConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement">putInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig">putSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection">resetAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstancePlacement">resetInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSpotConfig">resetSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSshConfig">resetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingMetricsCollection` <a name="putAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection"></a>

```typescript
public putAutoscalingMetricsCollection(value: GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `putConfigEncryption` <a name="putConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption"></a>

```typescript
public putConfigEncryption(value: GoogleContainerAwsNodePoolConfigConfigEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `putInstancePlacement` <a name="putInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement"></a>

```typescript
public putInstancePlacement(value: GoogleContainerAwsNodePoolConfigInstancePlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig"></a>

```typescript
public putProxyConfig(value: GoogleContainerAwsNodePoolConfigProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume"></a>

```typescript
public putRootVolume(value: GoogleContainerAwsNodePoolConfigRootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---

##### `putSpotConfig` <a name="putSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig"></a>

```typescript
public putSpotConfig(value: GoogleContainerAwsNodePoolConfigSpotConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig"></a>

```typescript
public putSshConfig(value: GoogleContainerAwsNodePoolConfigSshConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | GoogleContainerAwsNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]

---

##### `resetAutoscalingMetricsCollection` <a name="resetAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection"></a>

```typescript
public resetAutoscalingMetricsCollection(): void
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetInstancePlacement` <a name="resetInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstancePlacement"></a>

```typescript
public resetInstancePlacement(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetRootVolume"></a>

```typescript
public resetRootVolume(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSpotConfig` <a name="resetSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSpotConfig"></a>

```typescript
public resetSpotConfig(): void
```

##### `resetSshConfig` <a name="resetSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSshConfig"></a>

```typescript
public resetSshConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection">autoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference">GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacement">instancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference">GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference">GoogleContainerAwsNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference">GoogleContainerAwsNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfig">spotConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference">GoogleContainerAwsNodePoolConfigSpotConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference">GoogleContainerAwsNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList">GoogleContainerAwsNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput">autoscalingMetricsCollectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput">configEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacementInput">instancePlacementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfigInput">spotConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingMetricsCollection`<sup>Required</sup> <a name="autoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection"></a>

```typescript
public readonly autoscalingMetricsCollection: GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a>

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryption"></a>

```typescript
public readonly configEncryption: GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference">GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference</a>

---

##### `instancePlacement`<sup>Required</sup> <a name="instancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacement"></a>

```typescript
public readonly instancePlacement: GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference">GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleContainerAwsNodePoolConfigProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference">GoogleContainerAwsNodePoolConfigProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolume"></a>

```typescript
public readonly rootVolume: GoogleContainerAwsNodePoolConfigRootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference">GoogleContainerAwsNodePoolConfigRootVolumeOutputReference</a>

---

##### `spotConfig`<sup>Required</sup> <a name="spotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfig"></a>

```typescript
public readonly spotConfig: GoogleContainerAwsNodePoolConfigSpotConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference">GoogleContainerAwsNodePoolConfigSpotConfigOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfig"></a>

```typescript
public readonly sshConfig: GoogleContainerAwsNodePoolConfigSshConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference">GoogleContainerAwsNodePoolConfigSshConfigOutputReference</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taints"></a>

```typescript
public readonly taints: GoogleContainerAwsNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList">GoogleContainerAwsNodePoolConfigTaintsList</a>

---

##### `autoscalingMetricsCollectionInput`<sup>Optional</sup> <a name="autoscalingMetricsCollectionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput"></a>

```typescript
public readonly autoscalingMetricsCollectionInput: GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `configEncryptionInput`<sup>Optional</sup> <a name="configEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput"></a>

```typescript
public readonly configEncryptionInput: GoogleContainerAwsNodePoolConfigConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `instancePlacementInput`<sup>Optional</sup> <a name="instancePlacementInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacementInput"></a>

```typescript
public readonly instancePlacementInput: GoogleContainerAwsNodePoolConfigInstancePlacement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: GoogleContainerAwsNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: GoogleContainerAwsNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `spotConfigInput`<sup>Optional</sup> <a name="spotConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfigInput"></a>

```typescript
public readonly spotConfigInput: GoogleContainerAwsNodePoolConfigSpotConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```typescript
public readonly sshConfigInput: GoogleContainerAwsNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | GoogleContainerAwsNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---


### GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference <a name="GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics"></a>

```typescript
public resetMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput">metricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics">metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput"></a>

```typescript
public readonly metricsInput: string[];
```

- *Type:* string[]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---


### GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference <a name="GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---


### GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference <a name="GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resetTenancy">resetTenancy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resetTenancy"></a>

```typescript
public resetTenancy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigInstancePlacement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---


### GoogleContainerAwsNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---


### GoogleContainerAwsNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAwsNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---


### GoogleContainerAwsNodePoolConfigSpotConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigSpotConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypesInput">instanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypesInput"></a>

```typescript
public readonly instanceTypesInput: string[];
```

- *Type:* string[]

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigSpotConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---


### GoogleContainerAwsNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput">ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2KeyPairInput`<sup>Optional</sup> <a name="ec2KeyPairInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput"></a>

```typescript
public readonly ec2KeyPairInput: string;
```

- *Type:* string

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---


### GoogleContainerAwsNodePoolConfigTaintsList <a name="GoogleContainerAwsNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): GoogleContainerAwsNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>[]

---


### GoogleContainerAwsNodePoolConfigTaintsOutputReference <a name="GoogleContainerAwsNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints">GoogleContainerAwsNodePoolConfigTaints</a>

---


### GoogleContainerAwsNodePoolKubeletConfigOutputReference <a name="GoogleContainerAwsNodePoolKubeletConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuota">resetCpuCfsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">resetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy">resetCpuManagerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetPodPidsLimit">resetPodPidsLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCfsQuota` <a name="resetCpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```typescript
public resetCpuCfsQuota(): void
```

##### `resetCpuCfsQuotaPeriod` <a name="resetCpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```typescript
public resetCpuCfsQuotaPeriod(): void
```

##### `resetCpuManagerPolicy` <a name="resetCpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```typescript
public resetCpuManagerPolicy(): void
```

##### `resetPodPidsLimit` <a name="resetPodPidsLimit" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.resetPodPidsLimit"></a>

```typescript
public resetPodPidsLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaInput">cpuCfsQuotaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpuCfsQuotaPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpuManagerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimitInput">podPidsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimit">podPidsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCfsQuotaInput`<sup>Optional</sup> <a name="cpuCfsQuotaInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```typescript
public readonly cpuCfsQuotaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="cpuCfsQuotaPeriodInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```typescript
public readonly cpuCfsQuotaPeriodInput: string;
```

- *Type:* string

---

##### `cpuManagerPolicyInput`<sup>Optional</sup> <a name="cpuManagerPolicyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```typescript
public readonly cpuManagerPolicyInput: string;
```

- *Type:* string

---

##### `podPidsLimitInput`<sup>Optional</sup> <a name="podPidsLimitInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```typescript
public readonly podPidsLimitInput: number;
```

- *Type:* number

---

##### `cpuCfsQuota`<sup>Required</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```typescript
public readonly cpuCfsQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuCfsQuotaPeriod`<sup>Required</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```typescript
public readonly cpuCfsQuotaPeriod: string;
```

- *Type:* string

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```typescript
public readonly cpuManagerPolicy: string;
```

- *Type:* string

---

##### `podPidsLimit`<sup>Required</sup> <a name="podPidsLimit" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimit"></a>

```typescript
public readonly podPidsLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolKubeletConfig">GoogleContainerAwsNodePoolKubeletConfig</a>

---


### GoogleContainerAwsNodePoolManagementOutputReference <a name="GoogleContainerAwsNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.resetAutoRepair"></a>

```typescript
public resetAutoRepair(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepairInput"></a>

```typescript
public readonly autoRepairInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolManagement">GoogleContainerAwsNodePoolManagement</a>

---


### GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAwsNodePoolTimeoutsOutputReference <a name="GoogleContainerAwsNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

---


### GoogleContainerAwsNodePoolUpdateSettingsOutputReference <a name="GoogleContainerAwsNodePoolUpdateSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings">putSurgeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resetSurgeSettings">resetSurgeSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSurgeSettings` <a name="putSurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings"></a>

```typescript
public putSurgeSettings(value: GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---

##### `resetSurgeSettings` <a name="resetSurgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.resetSurgeSettings"></a>

```typescript
public resetSurgeSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettings">surgeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettingsInput">surgeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `surgeSettings`<sup>Required</sup> <a name="surgeSettings" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettings"></a>

```typescript
public readonly surgeSettings: GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference</a>

---

##### `surgeSettingsInput`<sup>Optional</sup> <a name="surgeSettingsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettingsInput"></a>

```typescript
public readonly surgeSettingsInput: GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettings">GoogleContainerAwsNodePoolUpdateSettings</a>

---


### GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference <a name="GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsNodePool } from '@cdktf/provider-google-beta'

new googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxSurge">resetMaxSurge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxUnavailable">resetMaxUnavailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSurge` <a name="resetMaxSurge" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxSurge"></a>

```typescript
public resetMaxSurge(): void
```

##### `resetMaxUnavailable` <a name="resetMaxUnavailable" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxUnavailable"></a>

```typescript
public resetMaxUnavailable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurgeInput">maxSurgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailableInput">maxUnavailableInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSurgeInput`<sup>Optional</sup> <a name="maxSurgeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurgeInput"></a>

```typescript
public readonly maxSurgeInput: number;
```

- *Type:* number

---

##### `maxUnavailableInput`<sup>Optional</sup> <a name="maxUnavailableInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailableInput"></a>

```typescript
public readonly maxUnavailableInput: number;
```

- *Type:* number

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurge"></a>

```typescript
public readonly maxSurge: number;
```

- *Type:* number

---

##### `maxUnavailable`<sup>Required</sup> <a name="maxUnavailable" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings">GoogleContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---



