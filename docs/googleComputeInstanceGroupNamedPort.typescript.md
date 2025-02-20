# `googleComputeInstanceGroupNamedPort` Submodule <a name="`googleComputeInstanceGroupNamedPort` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceGroupNamedPortA <a name="GoogleComputeInstanceGroupNamedPortA" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port google_compute_instance_group_named_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA(scope: Construct, id: string, config: GoogleComputeInstanceGroupNamedPortAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig">GoogleComputeInstanceGroupNamedPortAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig">GoogleComputeInstanceGroupNamedPortAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeInstanceGroupNamedPortTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceGroupNamedPortA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeInstanceGroupNamedPortA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstanceGroupNamedPortA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstanceGroupNamedPortA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceGroupNamedPortA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference">GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference">GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeInstanceGroupNamedPortTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceGroupNamedPortAConfig <a name="GoogleComputeInstanceGroupNamedPortAConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.Initializer"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupNamedPortAConfig: googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.group">group</a></code> | <code>string</code> | The name of the instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.name">name</a></code> | <code>string</code> | The name for this named port. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.port">port</a></code> | <code>number</code> | The port number, which can be a value between 1 and 65535. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#id GoogleComputeInstanceGroupNamedPortA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#project GoogleComputeInstanceGroupNamedPortA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.zone">zone</a></code> | <code>string</code> | The zone of the instance group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#group GoogleComputeInstanceGroupNamedPortA#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#name GoogleComputeInstanceGroupNamedPortA#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number, which can be a value between 1 and 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#port GoogleComputeInstanceGroupNamedPortA#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#id GoogleComputeInstanceGroupNamedPortA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#project GoogleComputeInstanceGroupNamedPortA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceGroupNamedPortTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#timeouts GoogleComputeInstanceGroupNamedPortA#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#zone GoogleComputeInstanceGroupNamedPortA#zone}

---

### GoogleComputeInstanceGroupNamedPortTimeouts <a name="GoogleComputeInstanceGroupNamedPortTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.Initializer"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

const googleComputeInstanceGroupNamedPortTimeouts: googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#create GoogleComputeInstanceGroupNamedPortA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#delete GoogleComputeInstanceGroupNamedPortA#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#create GoogleComputeInstanceGroupNamedPortA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_instance_group_named_port#delete GoogleComputeInstanceGroupNamedPortA#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference <a name="GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceGroupNamedPort } from '@cdktf/provider-google-beta'

new googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGroupNamedPortTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>

---



