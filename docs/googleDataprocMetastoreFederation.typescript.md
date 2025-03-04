# `googleDataprocMetastoreFederation` Submodule <a name="`googleDataprocMetastoreFederation` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreFederation <a name="GoogleDataprocMetastoreFederation" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation google_dataproc_metastore_federation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation(scope: Construct, id: string, config: GoogleDataprocMetastoreFederationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig">GoogleDataprocMetastoreFederationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig">GoogleDataprocMetastoreFederationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores">putBackendMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendMetastores` <a name="putBackendMetastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores"></a>

```typescript
public putBackendMetastores(value: IResolvable | GoogleDataprocMetastoreFederationBackendMetastores[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataprocMetastoreFederationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreFederation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreFederation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocMetastoreFederation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocMetastoreFederation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreFederation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastores">backendMetastores</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList">GoogleDataprocMetastoreFederationBackendMetastoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference">GoogleDataprocMetastoreFederationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastoresInput">backendMetastoresInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationIdInput">federationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationId">federationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastores"></a>

```typescript
public readonly backendMetastores: GoogleDataprocMetastoreFederationBackendMetastoresList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList">GoogleDataprocMetastoreFederationBackendMetastoresList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocMetastoreFederationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference">GoogleDataprocMetastoreFederationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `backendMetastoresInput`<sup>Optional</sup> <a name="backendMetastoresInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastoresInput"></a>

```typescript
public readonly backendMetastoresInput: IResolvable | GoogleDataprocMetastoreFederationBackendMetastores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]

---

##### `federationIdInput`<sup>Optional</sup> <a name="federationIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationIdInput"></a>

```typescript
public readonly federationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataprocMetastoreFederationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationId"></a>

```typescript
public readonly federationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreFederationBackendMetastores <a name="GoogleDataprocMetastoreFederationBackendMetastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreFederationBackendMetastores: googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.metastoreType">metastoreType</a></code> | <code>string</code> | The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.name">name</a></code> | <code>string</code> | The relative resource name of the metastore that is being federated. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.rank">rank</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}. |

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.metastoreType"></a>

```typescript
public readonly metastoreType: string;
```

- *Type:* string

The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#metastore_type GoogleDataprocMetastoreFederation#metastore_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The relative resource name of the metastore that is being federated.

The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#name GoogleDataprocMetastoreFederation#name}

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.rank"></a>

```typescript
public readonly rank: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}.

---

### GoogleDataprocMetastoreFederationConfig <a name="GoogleDataprocMetastoreFederationConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreFederationConfig: googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.backendMetastores">backendMetastores</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]</code> | backend_metastores block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.federationId">federationId</a></code> | <code>string</code> | The ID of the metastore federation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.version">version</a></code> | <code>string</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.location">location</a></code> | <code>string</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.backendMetastores"></a>

```typescript
public readonly backendMetastores: IResolvable | GoogleDataprocMetastoreFederationBackendMetastores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#backend_metastores GoogleDataprocMetastoreFederation#backend_metastores}

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.federationId"></a>

```typescript
public readonly federationId: string;
```

- *Type:* string

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#federation_id GoogleDataprocMetastoreFederation#federation_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#version GoogleDataprocMetastoreFederation#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#labels GoogleDataprocMetastoreFederation#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#location GoogleDataprocMetastoreFederation#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocMetastoreFederationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#timeouts GoogleDataprocMetastoreFederation#timeouts}

---

### GoogleDataprocMetastoreFederationTimeouts <a name="GoogleDataprocMetastoreFederationTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreFederationTimeouts: googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreFederationBackendMetastoresList <a name="GoogleDataprocMetastoreFederationBackendMetastoresList" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get"></a>

```typescript
public get(index: number): GoogleDataprocMetastoreFederationBackendMetastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocMetastoreFederationBackendMetastores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>[]

---


### GoogleDataprocMetastoreFederationBackendMetastoresOutputReference <a name="GoogleDataprocMetastoreFederationBackendMetastoresOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput">metastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput">rankInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType">metastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rank">rank</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreTypeInput`<sup>Optional</sup> <a name="metastoreTypeInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput"></a>

```typescript
public readonly metastoreTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput"></a>

```typescript
public readonly rankInput: string;
```

- *Type:* string

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType"></a>

```typescript
public readonly metastoreType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rank"></a>

```typescript
public readonly rank: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocMetastoreFederationBackendMetastores;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>

---


### GoogleDataprocMetastoreFederationTimeoutsOutputReference <a name="GoogleDataprocMetastoreFederationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreFederation } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocMetastoreFederationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

---



