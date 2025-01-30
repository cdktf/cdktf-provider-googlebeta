# `googleVertexAiDeploymentResourcePool` Submodule <a name="`googleVertexAiDeploymentResourcePool` Submodule" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiDeploymentResourcePool <a name="GoogleVertexAiDeploymentResourcePool" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

new googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool(scope: Construct, id: string, config: GoogleVertexAiDeploymentResourcePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig">GoogleVertexAiDeploymentResourcePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig">GoogleVertexAiDeploymentResourcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources">putDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources">resetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDedicatedResources` <a name="putDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources"></a>

```typescript
public putDedicatedResources(value: GoogleVertexAiDeploymentResourcePoolDedicatedResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiDeploymentResourcePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---

##### `resetDedicatedResources` <a name="resetDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources"></a>

```typescript
public resetDedicatedResources(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiDeploymentResourcePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiDeploymentResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiDeploymentResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput">dedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dedicatedResources`<sup>Required</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources"></a>

```typescript
public readonly dedicatedResources: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a>

---

##### `dedicatedResourcesInput`<sup>Optional</sup> <a name="dedicatedResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput"></a>

```typescript
public readonly dedicatedResourcesInput: GoogleVertexAiDeploymentResourcePoolDedicatedResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiDeploymentResourcePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiDeploymentResourcePoolConfig <a name="GoogleVertexAiDeploymentResourcePoolConfig" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

const googleVertexAiDeploymentResourcePoolConfig: googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name">name</a></code> | <code>string</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region">region</a></code> | <code>string</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#name GoogleVertexAiDeploymentResourcePool#name}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources"></a>

```typescript
public readonly dedicatedResources: GoogleVertexAiDeploymentResourcePoolDedicatedResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#dedicated_resources GoogleVertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#region GoogleVertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiDeploymentResourcePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#timeouts GoogleVertexAiDeploymentResourcePool#timeouts}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResources <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

const googleVertexAiDeploymentResourcePoolDedicatedResources: googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs">autoscalingMetricSpecs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]</code> | autoscaling_metric_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec"></a>

```typescript
public readonly machineSpec: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#machine_spec GoogleVertexAiDeploymentResourcePool#machine_spec}

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#min_replica_count GoogleVertexAiDeploymentResourcePool#min_replica_count}

---

##### `autoscalingMetricSpecs`<sup>Optional</sup> <a name="autoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs"></a>

```typescript
public readonly autoscalingMetricSpecs: IResolvable | GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#autoscaling_metric_specs GoogleVertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#max_replica_count GoogleVertexAiDeploymentResourcePool#max_replica_count}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

const googleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs: googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName">metricName</a></code> | <code>string</code> | The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target">target</a></code> | <code>number</code> | The target resource utilization in percentage (1% - 100%) for the given metric; |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#metric_name GoogleVertexAiDeploymentResourcePool#metric_name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

The target resource utilization in percentage (1% - 100%) for the given metric;

once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#target GoogleVertexAiDeploymentResourcePool#target}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

const googleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec: googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType">machineType</a></code> | <code>string</code> | The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types). |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_count GoogleVertexAiDeploymentResourcePool#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_type GoogleVertexAiDeploymentResourcePool#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#machine_type GoogleVertexAiDeploymentResourcePool#machine_type}

---

### GoogleVertexAiDeploymentResourcePoolTimeouts <a name="GoogleVertexAiDeploymentResourcePoolTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

const googleVertexAiDeploymentResourcePoolTimeouts: googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

new googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

new googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

new googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount"></a>

```typescript
public resetAcceleratorCount(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput"></a>

```typescript
public readonly acceleratorCountInput: number;
```

- *Type:* number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

new googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs">putAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs">resetAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingMetricSpecs` <a name="putAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs"></a>

```typescript
public putAutoscalingMetricSpecs(value: IResolvable | GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec"></a>

```typescript
public putMachineSpec(value: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `resetAutoscalingMetricSpecs` <a name="resetAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs"></a>

```typescript
public resetAutoscalingMetricSpecs(): void
```

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```typescript
public resetMaxReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">autoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput">autoscalingMetricSpecsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingMetricSpecs`<sup>Required</sup> <a name="autoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```typescript
public readonly autoscalingMetricSpecs: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec"></a>

```typescript
public readonly machineSpec: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a>

---

##### `autoscalingMetricSpecsInput`<sup>Optional</sup> <a name="autoscalingMetricSpecsInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput"></a>

```typescript
public readonly autoscalingMetricSpecsInput: IResolvable | GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>[]

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```typescript
public readonly machineSpecInput: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```typescript
public readonly maxReplicaCountInput: number;
```

- *Type:* number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```typescript
public readonly minReplicaCountInput: number;
```

- *Type:* number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiDeploymentResourcePoolDedicatedResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---


### GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiDeploymentResourcePool } from '@cdktf/provider-google-beta'

new googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiDeploymentResourcePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---



