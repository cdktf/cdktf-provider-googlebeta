# `googleTpuV2QueuedResource` Submodule <a name="`googleTpuV2QueuedResource` Submodule" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTpuV2QueuedResource <a name="GoogleTpuV2QueuedResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource google_tpu_v2_queued_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

new googleTpuV2QueuedResource.GoogleTpuV2QueuedResource(scope: Construct, id: string, config: GoogleTpuV2QueuedResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig">GoogleTpuV2QueuedResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig">GoogleTpuV2QueuedResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTpu">putTpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTpu">resetTpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleTpuV2QueuedResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>

---

##### `putTpu` <a name="putTpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTpu"></a>

```typescript
public putTpu(value: GoogleTpuV2QueuedResourceTpu): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTpu` <a name="resetTpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTpu"></a>

```typescript
public resetTpu(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTpuV2QueuedResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleTpuV2QueuedResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleTpuV2QueuedResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleTpuV2QueuedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTpuV2QueuedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference">GoogleTpuV2QueuedResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpu">tpu</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference">GoogleTpuV2QueuedResourceTpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpuInput">tpuInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleTpuV2QueuedResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference">GoogleTpuV2QueuedResourceTimeoutsOutputReference</a>

---

##### `tpu`<sup>Required</sup> <a name="tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpu"></a>

```typescript
public readonly tpu: GoogleTpuV2QueuedResourceTpuOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference">GoogleTpuV2QueuedResourceTpuOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleTpuV2QueuedResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>

---

##### `tpuInput`<sup>Optional</sup> <a name="tpuInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpuInput"></a>

```typescript
public readonly tpuInput: GoogleTpuV2QueuedResourceTpu;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTpuV2QueuedResourceConfig <a name="GoogleTpuV2QueuedResourceConfig" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

const googleTpuV2QueuedResourceConfig: googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.name">name</a></code> | <code>string</code> | The immutable name of the Queued Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.tpu">tpu</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | tpu block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.zone">zone</a></code> | <code>string</code> | The GCP location for the Queued Resource. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The immutable name of the Queued Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#name GoogleTpuV2QueuedResource#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleTpuV2QueuedResourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#timeouts GoogleTpuV2QueuedResource#timeouts}

---

##### `tpu`<sup>Optional</sup> <a name="tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.tpu"></a>

```typescript
public readonly tpu: GoogleTpuV2QueuedResourceTpu;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

tpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#tpu GoogleTpuV2QueuedResource#tpu}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The GCP location for the Queued Resource. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#zone GoogleTpuV2QueuedResource#zone}

---

### GoogleTpuV2QueuedResourceTimeouts <a name="GoogleTpuV2QueuedResourceTimeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

const googleTpuV2QueuedResourceTimeouts: googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#create GoogleTpuV2QueuedResource#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#delete GoogleTpuV2QueuedResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#create GoogleTpuV2QueuedResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#delete GoogleTpuV2QueuedResource#delete}.

---

### GoogleTpuV2QueuedResourceTpu <a name="GoogleTpuV2QueuedResourceTpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

const googleTpuV2QueuedResourceTpu: googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu.property.nodeSpec">nodeSpec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]</code> | node_spec block. |

---

##### `nodeSpec`<sup>Optional</sup> <a name="nodeSpec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu.property.nodeSpec"></a>

```typescript
public readonly nodeSpec: IResolvable | GoogleTpuV2QueuedResourceTpuNodeSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]

node_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#node_spec GoogleTpuV2QueuedResource#node_spec}

---

### GoogleTpuV2QueuedResourceTpuNodeSpec <a name="GoogleTpuV2QueuedResourceTpuNodeSpec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

const googleTpuV2QueuedResourceTpuNodeSpec: googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeAttribute">nodeAttribute</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a></code> | node block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.parent">parent</a></code> | <code>string</code> | The parent resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeId">nodeId</a></code> | <code>string</code> | Unqualified node identifier used to identify the node in the project once provisioned. |

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: GoogleTpuV2QueuedResourceTpuNodeSpecNode;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#node GoogleTpuV2QueuedResource#node}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#parent GoogleTpuV2QueuedResource#parent}

---

##### `nodeId`<sup>Optional</sup> <a name="nodeId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

Unqualified node identifier used to identify the node in the project once provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#node_id GoogleTpuV2QueuedResource#node_id}

---

### GoogleTpuV2QueuedResourceTpuNodeSpecNode <a name="GoogleTpuV2QueuedResourceTpuNodeSpecNode" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

const googleTpuV2QueuedResourceTpuNodeSpecNode: googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Runtime version for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | TPU accelerator type for the TPU. If not specified, this defaults to 'v2-8'. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.description">description</a></code> | <code>string</code> | Text description of the TPU. |

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#runtime_version GoogleTpuV2QueuedResource#runtime_version}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

TPU accelerator type for the TPU. If not specified, this defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#accelerator_type GoogleTpuV2QueuedResource#accelerator_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_tpu_v2_queued_resource#description GoogleTpuV2QueuedResource#description}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTpuV2QueuedResourceTimeoutsOutputReference <a name="GoogleTpuV2QueuedResourceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

new googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2QueuedResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>

---


### GoogleTpuV2QueuedResourceTpuNodeSpecList <a name="GoogleTpuV2QueuedResourceTpuNodeSpecList" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

new googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.get"></a>

```typescript
public get(index: number): GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2QueuedResourceTpuNodeSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]

---


### GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference <a name="GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

new googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2QueuedResourceTpuNodeSpecNode;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

---


### GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference <a name="GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

new googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute">putNodeAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resetNodeId">resetNodeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeAttribute` <a name="putNodeAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute"></a>

```typescript
public putNodeAttribute(value: GoogleTpuV2QueuedResourceTpuNodeSpecNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

---

##### `resetNodeId` <a name="resetNodeId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resetNodeId"></a>

```typescript
public resetNodeId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttribute">nodeAttribute</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference">GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttributeInput">nodeAttributeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeIdInput">nodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference">GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference</a>

---

##### `nodeAttributeInput`<sup>Optional</sup> <a name="nodeAttributeInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttributeInput"></a>

```typescript
public readonly nodeAttributeInput: GoogleTpuV2QueuedResourceTpuNodeSpecNode;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

---

##### `nodeIdInput`<sup>Optional</sup> <a name="nodeIdInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeIdInput"></a>

```typescript
public readonly nodeIdInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2QueuedResourceTpuNodeSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>

---


### GoogleTpuV2QueuedResourceTpuOutputReference <a name="GoogleTpuV2QueuedResourceTpuOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer"></a>

```typescript
import { googleTpuV2QueuedResource } from '@cdktf/provider-google-beta'

new googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.putNodeSpec">putNodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resetNodeSpec">resetNodeSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeSpec` <a name="putNodeSpec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.putNodeSpec"></a>

```typescript
public putNodeSpec(value: IResolvable | GoogleTpuV2QueuedResourceTpuNodeSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.putNodeSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]

---

##### `resetNodeSpec` <a name="resetNodeSpec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resetNodeSpec"></a>

```typescript
public resetNodeSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpec">nodeSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList">GoogleTpuV2QueuedResourceTpuNodeSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpecInput">nodeSpecInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeSpec`<sup>Required</sup> <a name="nodeSpec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpec"></a>

```typescript
public readonly nodeSpec: GoogleTpuV2QueuedResourceTpuNodeSpecList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList">GoogleTpuV2QueuedResourceTpuNodeSpecList</a>

---

##### `nodeSpecInput`<sup>Optional</sup> <a name="nodeSpecInput" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpecInput"></a>

```typescript
public readonly nodeSpecInput: IResolvable | GoogleTpuV2QueuedResourceTpuNodeSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2QueuedResourceTpu;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

---



