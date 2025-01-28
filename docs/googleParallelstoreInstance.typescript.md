# `googleParallelstoreInstance` Submodule <a name="`googleParallelstoreInstance` Submodule" id="@cdktf/provider-google-beta.googleParallelstoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParallelstoreInstance <a name="GoogleParallelstoreInstance" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance google_parallelstore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

new googleParallelstoreInstance.GoogleParallelstoreInstance(scope: Construct, id: string, config: GoogleParallelstoreInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig">GoogleParallelstoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig">GoogleParallelstoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDirectoryStripeLevel">resetDirectoryStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetFileStripeLevel">resetFileStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleParallelstoreInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDirectoryStripeLevel` <a name="resetDirectoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDirectoryStripeLevel"></a>

```typescript
public resetDirectoryStripeLevel(): void
```

##### `resetFileStripeLevel` <a name="resetFileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetFileStripeLevel"></a>

```typescript
public resetFileStripeLevel(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetReservedIpRange"></a>

```typescript
public resetReservedIpRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParallelstoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleParallelstoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleParallelstoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleParallelstoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParallelstoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.accessPoints">accessPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.daosVersion">daosVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveReservedIpRange">effectiveReservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference">GoogleParallelstoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGibInput">capacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevelInput">directoryStripeLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevelInput">fileStripeLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGib">capacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevel">directoryStripeLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevel">fileStripeLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.accessPoints"></a>

```typescript
public readonly accessPoints: string[];
```

- *Type:* string[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `daosVersion`<sup>Required</sup> <a name="daosVersion" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.daosVersion"></a>

```typescript
public readonly daosVersion: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveReservedIpRange`<sup>Required</sup> <a name="effectiveReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveReservedIpRange"></a>

```typescript
public readonly effectiveReservedIpRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParallelstoreInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference">GoogleParallelstoreInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGibInput"></a>

```typescript
public readonly capacityGibInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directoryStripeLevelInput`<sup>Optional</sup> <a name="directoryStripeLevelInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevelInput"></a>

```typescript
public readonly directoryStripeLevelInput: string;
```

- *Type:* string

---

##### `fileStripeLevelInput`<sup>Optional</sup> <a name="fileStripeLevelInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevelInput"></a>

```typescript
public readonly fileStripeLevelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRangeInput"></a>

```typescript
public readonly reservedIpRangeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleParallelstoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directoryStripeLevel`<sup>Required</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevel"></a>

```typescript
public readonly directoryStripeLevel: string;
```

- *Type:* string

---

##### `fileStripeLevel`<sup>Required</sup> <a name="fileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevel"></a>

```typescript
public readonly fileStripeLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParallelstoreInstanceConfig <a name="GoogleParallelstoreInstanceConfig" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.Initializer"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

const googleParallelstoreInstanceConfig: googleParallelstoreInstance.GoogleParallelstoreInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.capacityGib">capacityGib</a></code> | <code>string</code> | Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.description">description</a></code> | <code>string</code> | The description of the instance. 2048 characters or less. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.directoryStripeLevel">directoryStripeLevel</a></code> | <code>string</code> | Stripe level for directories. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.fileStripeLevel">fileStripeLevel</a></code> | <code>string</code> | Stripe level for files. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.network">network</a></code> | <code>string</code> | Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#capacity_gib GoogleParallelstoreInstance#capacity_gib}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.
  * Must be between 1-63 characters.
  * Must end with a number or a letter.
  * Must be unique within the customer project/ location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#instance_id GoogleParallelstoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#location GoogleParallelstoreInstance#location}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#deployment_type GoogleParallelstoreInstance#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the instance. 2048 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#description GoogleParallelstoreInstance#description}

---

##### `directoryStripeLevel`<sup>Optional</sup> <a name="directoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.directoryStripeLevel"></a>

```typescript
public readonly directoryStripeLevel: string;
```

- *Type:* string

Stripe level for directories.

MIN when directory has a small number of files.
MAX when directory has a large number of files.
  Possible values:
  DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
  DIRECTORY_STRIPE_LEVEL_MIN
  DIRECTORY_STRIPE_LEVEL_BALANCED
  DIRECTORY_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#directory_stripe_level GoogleParallelstoreInstance#directory_stripe_level}

---

##### `fileStripeLevel`<sup>Optional</sup> <a name="fileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.fileStripeLevel"></a>

```typescript
public readonly fileStripeLevel: string;
```

- *Type:* string

Stripe level for files.

MIN better suited for small size files.
MAX higher throughput performance for larger files.
  Possible values:
  FILE_STRIPE_LEVEL_UNSPECIFIED
  FILE_STRIPE_LEVEL_MIN
  FILE_STRIPE_LEVEL_BALANCED
  FILE_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#file_stripe_level GoogleParallelstoreInstance#file_stripe_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies.

Cloud Labels can be used to filter collections
of resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route, firewall,
load balancing, etc.).

* Label keys must be between 1 and 63 characters long and must conform to
 the following regular expression: 'a-z{0,62}'.
* Label values must be between 0 and 63 characters long and must conform
 to the regular expression '[a-z0-9_-]{0,63}'.
* No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. Therefore, you are advised to use
an internal label representation, such as JSON, which doesn't rely upon
specific characters being disallowed.  For example, representing labels
as the string:  'name + "_" + value' would prove problematic if we were to
allow '"_"' in a future release. "


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#labels GoogleParallelstoreInstance#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#network GoogleParallelstoreInstance#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}.

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

Immutable.

Contains the id of the allocated IP address range
associated with the private service access connection for example, \"test-default\"
associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
be considered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#reserved_ip_range GoogleParallelstoreInstance#reserved_ip_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParallelstoreInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#timeouts GoogleParallelstoreInstance#timeouts}

---

### GoogleParallelstoreInstanceTimeouts <a name="GoogleParallelstoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.Initializer"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

const googleParallelstoreInstanceTimeouts: googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#create GoogleParallelstoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#delete GoogleParallelstoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#update GoogleParallelstoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#create GoogleParallelstoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#delete GoogleParallelstoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parallelstore_instance#update GoogleParallelstoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParallelstoreInstanceTimeoutsOutputReference <a name="GoogleParallelstoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleParallelstoreInstance } from '@cdktf/provider-google-beta'

new googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleParallelstoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---



