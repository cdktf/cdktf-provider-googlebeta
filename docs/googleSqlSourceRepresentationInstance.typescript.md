# `googleSqlSourceRepresentationInstance` Submodule <a name="`googleSqlSourceRepresentationInstance` Submodule" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSqlSourceRepresentationInstance <a name="GoogleSqlSourceRepresentationInstance" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance google_sql_source_representation_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

new googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance(scope: Construct, id: string, config: GoogleSqlSourceRepresentationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig">GoogleSqlSourceRepresentationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig">GoogleSqlSourceRepresentationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetDumpFilePath">resetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSqlSourceRepresentationInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a>

---

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetDumpFilePath` <a name="resetDumpFilePath" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetDumpFilePath"></a>

```typescript
public resetDumpFilePath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSqlSourceRepresentationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSqlSourceRepresentationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSqlSourceRepresentationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSqlSourceRepresentationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSqlSourceRepresentationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference">GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersionInput">databaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePathInput">dumpFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference">GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference</a>

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersionInput"></a>

```typescript
public readonly databaseVersionInput: string;
```

- *Type:* string

---

##### `dumpFilePathInput`<sup>Optional</sup> <a name="dumpFilePathInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePathInput"></a>

```typescript
public readonly dumpFilePathInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSqlSourceRepresentationInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSqlSourceRepresentationInstanceConfig <a name="GoogleSqlSourceRepresentationInstanceConfig" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.Initializer"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

const googleSqlSourceRepresentationInstanceConfig: googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.host">host</a></code> | <code>string</code> | The IPv4 address and port for the external server, or the the DNS address for the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientKey">clientKey</a></code> | <code>string</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#id GoogleSqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.password">password</a></code> | <code>string</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.port">port</a></code> | <code>number</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#project GoogleSqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.username">username</a></code> | <code>string</code> | The replication user account on the external server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_4, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#database_version GoogleSqlSourceRepresentationInstance#database_version}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The IPv4 address and port for the external server, or the the DNS address for the external server.

If the external server is hosted on Cloud SQL, the port is 5432.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#host GoogleSqlSourceRepresentationInstance#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#name GoogleSqlSourceRepresentationInstance#name}

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#ca_certificate GoogleSqlSourceRepresentationInstance#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#client_certificate GoogleSqlSourceRepresentationInstance#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#client_key GoogleSqlSourceRepresentationInstance#client_key}

---

##### `dumpFilePath`<sup>Optional</sup> <a name="dumpFilePath" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#dump_file_path GoogleSqlSourceRepresentationInstance#dump_file_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#id GoogleSqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#password GoogleSqlSourceRepresentationInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#port GoogleSqlSourceRepresentationInstance#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#project GoogleSqlSourceRepresentationInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#region GoogleSqlSourceRepresentationInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSqlSourceRepresentationInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#timeouts GoogleSqlSourceRepresentationInstance#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#username GoogleSqlSourceRepresentationInstance#username}

---

### GoogleSqlSourceRepresentationInstanceTimeouts <a name="GoogleSqlSourceRepresentationInstanceTimeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.Initializer"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

const googleSqlSourceRepresentationInstanceTimeouts: googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#create GoogleSqlSourceRepresentationInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#delete GoogleSqlSourceRepresentationInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#create GoogleSqlSourceRepresentationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_source_representation_instance#delete GoogleSqlSourceRepresentationInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference <a name="GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSqlSourceRepresentationInstance } from '@cdktf/provider-google-beta'

new googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSqlSourceRepresentationInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a>

---



