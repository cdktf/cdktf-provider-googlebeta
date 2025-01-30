# `googleComputeTargetSslProxy` Submodule <a name="`googleComputeTargetSslProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetSslProxy <a name="GoogleComputeTargetSslProxy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy google_compute_target_ssl_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

new googleComputeTargetSslProxy.GoogleComputeTargetSslProxy(scope: Construct, id: string, config: GoogleComputeTargetSslProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig">GoogleComputeTargetSslProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig">GoogleComputeTargetSslProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetCertificateMap">resetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslCertificates">resetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeTargetSslProxyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

---

##### `resetCertificateMap` <a name="resetCertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetCertificateMap"></a>

```typescript
public resetCertificateMap(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetSslCertificates` <a name="resetSslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslCertificates"></a>

```typescript
public resetSslCertificates(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeTargetSslProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeTargetSslProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeTargetSslProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeTargetSslProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetSslProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyId">proxyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference">GoogleComputeTargetSslProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMapInput">certificateMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificatesInput">sslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMap">certificateMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyId"></a>

```typescript
public readonly proxyId: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeTargetSslProxyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference">GoogleComputeTargetSslProxyTimeoutsOutputReference</a>

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `certificateMapInput`<sup>Optional</sup> <a name="certificateMapInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMapInput"></a>

```typescript
public readonly certificateMapInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `sslCertificatesInput`<sup>Optional</sup> <a name="sslCertificatesInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificatesInput"></a>

```typescript
public readonly sslCertificatesInput: string[];
```

- *Type:* string[]

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeTargetSslProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `certificateMap`<sup>Required</sup> <a name="certificateMap" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMap"></a>

```typescript
public readonly certificateMap: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `sslCertificates`<sup>Required</sup> <a name="sslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetSslProxyConfig <a name="GoogleComputeTargetSslProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.Initializer"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

const googleComputeTargetSslProxyConfig: googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.backendService">backendService</a></code> | <code>string</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.certificateMap">certificateMap</a></code> | <code>string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | A list of SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#backend_service GoogleComputeTargetSslProxy#backend_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#name GoogleComputeTargetSslProxy#name}

---

##### `certificateMap`<sup>Optional</sup> <a name="certificateMap" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.certificateMap"></a>

```typescript
public readonly certificateMap: string;
```

- *Type:* string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field can only be set for global target proxies.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#certificate_map GoogleComputeTargetSslProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#description GoogleComputeTargetSslProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}.

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#proxy_header GoogleComputeTargetSslProxy#proxy_header}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

A list of SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one
SSL certificate must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#ssl_certificates GoogleComputeTargetSslProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource.

If not set, the TargetSslProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#ssl_policy GoogleComputeTargetSslProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeTargetSslProxyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#timeouts GoogleComputeTargetSslProxy#timeouts}

---

### GoogleComputeTargetSslProxyTimeouts <a name="GoogleComputeTargetSslProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.Initializer"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

const googleComputeTargetSslProxyTimeouts: googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetSslProxyTimeoutsOutputReference <a name="GoogleComputeTargetSslProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeTargetSslProxy } from '@cdktf/provider-google-beta'

new googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeTargetSslProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

---



