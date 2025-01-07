# `googleComputeBackendServiceSignedUrlKey` Submodule <a name="`googleComputeBackendServiceSignedUrlKey` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendServiceSignedUrlKey <a name="GoogleComputeBackendServiceSignedUrlKey" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key google_compute_backend_service_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

new googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey(scope: Construct, id: string, config: GoogleComputeBackendServiceSignedUrlKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig">GoogleComputeBackendServiceSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig">GoogleComputeBackendServiceSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeBackendServiceSignedUrlKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeBackendServiceSignedUrlKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeBackendServiceSignedUrlKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeBackendServiceSignedUrlKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeBackendServiceSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendServiceSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValueInput">keyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValue">keyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyValueInput`<sup>Optional</sup> <a name="keyValueInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValueInput"></a>

```typescript
public readonly keyValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeBackendServiceSignedUrlKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendServiceSignedUrlKeyConfig <a name="GoogleComputeBackendServiceSignedUrlKeyConfig" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.Initializer"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

const googleComputeBackendServiceSignedUrlKeyConfig: googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.backendService">backendService</a></code> | <code>string</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.keyValue">keyValue</a></code> | <code>string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.name">name</a></code> | <code>string</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#backend_service GoogleComputeBackendServiceSignedUrlKey#backend_service}

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#key_value GoogleComputeBackendServiceSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#name GoogleComputeBackendServiceSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeBackendServiceSignedUrlKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#timeouts GoogleComputeBackendServiceSignedUrlKey#timeouts}

---

### GoogleComputeBackendServiceSignedUrlKeyTimeouts <a name="GoogleComputeBackendServiceSignedUrlKeyTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.Initializer"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

const googleComputeBackendServiceSignedUrlKeyTimeouts: googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference <a name="GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendServiceSignedUrlKey } from '@cdktf/provider-google-beta'

new googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBackendServiceSignedUrlKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

---



