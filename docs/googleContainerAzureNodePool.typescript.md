# `googleContainerAzureNodePool` Submodule <a name="`googleContainerAzureNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAzureNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAzureNodePool <a name="GoogleContainerAzureNodePool" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool google_container_azure_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePool(scope: Construct, id: string, config: GoogleContainerAzureNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig">GoogleContainerAzureNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig">GoogleContainerAzureNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint">putMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone">resetAzureAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling"></a>

```typescript
public putAutoscaling(value: GoogleContainerAzureNodePoolAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig"></a>

```typescript
public putConfig(value: GoogleContainerAzureNodePoolConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement"></a>

```typescript
public putManagement(value: GoogleContainerAzureNodePoolManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `putMaxPodsConstraint` <a name="putMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint"></a>

```typescript
public putMaxPodsConstraint(value: GoogleContainerAzureNodePoolMaxPodsConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContainerAzureNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAzureAvailabilityZone` <a name="resetAzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone"></a>

```typescript
public resetAzureAvailabilityZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAzureNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAzureNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAzureNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput">azureAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput">maxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling"></a>

```typescript
public readonly autoscaling: GoogleContainerAzureNodePoolAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config"></a>

```typescript
public readonly config: GoogleContainerAzureNodePoolConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management"></a>

```typescript
public readonly management: GoogleContainerAzureNodePoolManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a>

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint"></a>

```typescript
public readonly maxPodsConstraint: GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAzureNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput"></a>

```typescript
public readonly autoscalingInput: GoogleContainerAzureNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `azureAvailabilityZoneInput`<sup>Optional</sup> <a name="azureAvailabilityZoneInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput"></a>

```typescript
public readonly azureAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput"></a>

```typescript
public readonly configInput: GoogleContainerAzureNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput"></a>

```typescript
public readonly managementInput: GoogleContainerAzureNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `maxPodsConstraintInput`<sup>Optional</sup> <a name="maxPodsConstraintInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput"></a>

```typescript
public readonly maxPodsConstraintInput: GoogleContainerAzureNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContainerAzureNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone"></a>

```typescript
public readonly azureAvailabilityZone: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAzureNodePoolAutoscaling <a name="GoogleContainerAzureNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolAutoscaling: googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Maximum number of nodes in the node pool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#max_node_count GoogleContainerAzureNodePool#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#min_node_count GoogleContainerAzureNodePool#min_node_count}

---

### GoogleContainerAzureNodePoolConfig <a name="GoogleContainerAzureNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolConfig: googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster">cluster</a></code> | <code>string</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name">name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version">version</a></code> | <code>string</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>string</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling"></a>

```typescript
public readonly autoscaling: GoogleContainerAzureNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#autoscaling GoogleContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#cluster GoogleContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config"></a>

```typescript
public readonly config: GoogleContainerAzureNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#config GoogleContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#location GoogleContainerAzureNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint"></a>

```typescript
public readonly maxPodsConstraint: GoogleContainerAzureNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#max_pods_constraint GoogleContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#name GoogleContainerAzureNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#subnet_id GoogleContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#version GoogleContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#annotations GoogleContainerAzureNodePool#annotations}

---

##### `azureAvailabilityZone`<sup>Optional</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone"></a>

```typescript
public readonly azureAvailabilityZone: string;
```

- *Type:* string

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#azure_availability_zone GoogleContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management"></a>

```typescript
public readonly management: GoogleContainerAzureNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#management GoogleContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#project GoogleContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAzureNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#timeouts GoogleContainerAzureNodePool#timeouts}

---

### GoogleContainerAzureNodePoolConfigA <a name="GoogleContainerAzureNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolConfigA: googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType">imageType</a></code> | <code>string</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize">vmSize</a></code> | <code>string</code> | Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`. |

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig"></a>

```typescript
public readonly sshConfig: GoogleContainerAzureNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#ssh_config GoogleContainerAzureNodePool#ssh_config}

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#image_type GoogleContainerAzureNodePool#image_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#labels GoogleContainerAzureNodePool#labels}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleContainerAzureNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#proxy_config GoogleContainerAzureNodePool#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume"></a>

```typescript
public readonly rootVolume: GoogleContainerAzureNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#root_volume GoogleContainerAzureNodePool#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#tags GoogleContainerAzureNodePool#tags}

---

##### `vmSize`<sup>Optional</sup> <a name="vmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#vm_size GoogleContainerAzureNodePool#vm_size}

---

### GoogleContainerAzureNodePoolConfigProxyConfig <a name="GoogleContainerAzureNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolConfigProxyConfig: googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId">secretId</a></code> | <code>string</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#resource_group_id GoogleContainerAzureNodePool#resource_group_id}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#secret_id GoogleContainerAzureNodePool#secret_id}

---

### GoogleContainerAzureNodePoolConfigRootVolume <a name="GoogleContainerAzureNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolConfigRootVolume: googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#size_gib GoogleContainerAzureNodePool#size_gib}

---

### GoogleContainerAzureNodePoolConfigSshConfig <a name="GoogleContainerAzureNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolConfigSshConfig: googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey">authorizedKey</a></code> | <code>string</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey"></a>

```typescript
public readonly authorizedKey: string;
```

- *Type:* string

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#authorized_key GoogleContainerAzureNodePool#authorized_key}

---

### GoogleContainerAzureNodePoolManagement <a name="GoogleContainerAzureNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolManagement: googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#auto_repair GoogleContainerAzureNodePool#auto_repair}

---

### GoogleContainerAzureNodePoolMaxPodsConstraint <a name="GoogleContainerAzureNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolMaxPodsConstraint: googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum number of pods to schedule on a single node. |

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#max_pods_per_node GoogleContainerAzureNodePool#max_pods_per_node}

---

### GoogleContainerAzureNodePoolTimeouts <a name="GoogleContainerAzureNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

const googleContainerAzureNodePoolTimeouts: googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAzureNodePoolAutoscalingOutputReference <a name="GoogleContainerAzureNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---


### GoogleContainerAzureNodePoolConfigAOutputReference <a name="GoogleContainerAzureNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize">resetVmSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig"></a>

```typescript
public putProxyConfig(value: GoogleContainerAzureNodePoolConfigProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume"></a>

```typescript
public putRootVolume(value: GoogleContainerAzureNodePoolConfigRootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig"></a>

```typescript
public putSshConfig(value: GoogleContainerAzureNodePoolConfigSshConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume"></a>

```typescript
public resetRootVolume(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVmSize` <a name="resetVmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize"></a>

```typescript
public resetVmSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleContainerAzureNodePoolConfigProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume"></a>

```typescript
public readonly rootVolume: GoogleContainerAzureNodePoolConfigRootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig"></a>

```typescript
public readonly sshConfig: GoogleContainerAzureNodePoolConfigSshConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a>

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: GoogleContainerAzureNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: GoogleContainerAzureNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```typescript
public readonly sshConfigInput: GoogleContainerAzureNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---


### GoogleContainerAzureNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```typescript
public readonly resourceGroupIdInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---


### GoogleContainerAzureNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAzureNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---


### GoogleContainerAzureNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput">authorizedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey">authorizedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizedKeyInput`<sup>Optional</sup> <a name="authorizedKeyInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput"></a>

```typescript
public readonly authorizedKeyInput: string;
```

- *Type:* string

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey"></a>

```typescript
public readonly authorizedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---


### GoogleContainerAzureNodePoolManagementOutputReference <a name="GoogleContainerAzureNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair"></a>

```typescript
public resetAutoRepair(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput"></a>

```typescript
public readonly autoRepairInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---


### GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAzureNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAzureNodePoolTimeoutsOutputReference <a name="GoogleContainerAzureNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContainerAzureNodePool } from '@cdktf/provider-google-beta'

new googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAzureNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

---



