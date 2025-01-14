# `googleDnsRecordSet` Submodule <a name="`googleDnsRecordSet` Submodule" id="@cdktf/provider-google-beta.googleDnsRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsRecordSet <a name="GoogleDnsRecordSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set google_dns_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSet(scope: Construct, id: string, config: GoogleDnsRecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig">GoogleDnsRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig">GoogleDnsRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy">putRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRoutingPolicy">resetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRrdatas">resetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutingPolicy` <a name="putRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy"></a>

```typescript
public putRoutingPolicy(value: GoogleDnsRecordSetRoutingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRoutingPolicy` <a name="resetRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRoutingPolicy"></a>

```typescript
public resetRoutingPolicy(): void
```

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRrdatas"></a>

```typescript
public resetRrdatas(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDnsRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

googleDnsRecordSet.GoogleDnsRecordSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDnsRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDnsRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDnsRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicy">routingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference">GoogleDnsRecordSetRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZoneInput">managedZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicyInput">routingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatasInput">rrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZone">managedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: GoogleDnsRecordSetRoutingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference">GoogleDnsRecordSetRoutingPolicyOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedZoneInput`<sup>Optional</sup> <a name="managedZoneInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZoneInput"></a>

```typescript
public readonly managedZoneInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `routingPolicyInput`<sup>Optional</sup> <a name="routingPolicyInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicyInput"></a>

```typescript
public readonly routingPolicyInput: GoogleDnsRecordSetRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatasInput"></a>

```typescript
public readonly rrdatasInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedZone`<sup>Required</sup> <a name="managedZone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZone"></a>

```typescript
public readonly managedZone: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsRecordSetConfig <a name="GoogleDnsRecordSetConfig" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetConfig: googleDnsRecordSet.GoogleDnsRecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.managedZone">managedZone</a></code> | <code>string</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.name">name</a></code> | <code>string</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.type">type</a></code> | <code>string</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.routingPolicy">routingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.ttl">ttl</a></code> | <code>number</code> | The time-to-live of this record set (seconds). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedZone`<sup>Required</sup> <a name="managedZone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.managedZone"></a>

```typescript
public readonly managedZone: string;
```

- *Type:* string

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#managed_zone GoogleDnsRecordSet#managed_zone}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#name GoogleDnsRecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#type GoogleDnsRecordSet#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `routingPolicy`<sup>Optional</sup> <a name="routingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: GoogleDnsRecordSetRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#routing_policy GoogleDnsRecordSet#routing_policy}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration string (e.g. "first255characters\"\"morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ttl GoogleDnsRecordSet#ttl}

---

### GoogleDnsRecordSetRoutingPolicy <a name="GoogleDnsRecordSetRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicy: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.enableGeoFencing">enableGeoFencing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to enable fencing for geo queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.geo">geo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]</code> | geo block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.healthCheck">healthCheck</a></code> | <code>string</code> | Specifies the health check. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.primaryBackup">primaryBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | primary_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.wrr">wrr</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]</code> | wrr block. |

---

##### `enableGeoFencing`<sup>Optional</sup> <a name="enableGeoFencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.enableGeoFencing"></a>

```typescript
public readonly enableGeoFencing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#enable_geo_fencing GoogleDnsRecordSet#enable_geo_fencing}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.geo"></a>

```typescript
public readonly geo: IResolvable | GoogleDnsRecordSetRoutingPolicyGeo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#geo GoogleDnsRecordSet#geo}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

Specifies the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#health_check GoogleDnsRecordSet#health_check}

---

##### `primaryBackup`<sup>Optional</sup> <a name="primaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.primaryBackup"></a>

```typescript
public readonly primaryBackup: GoogleDnsRecordSetRoutingPolicyPrimaryBackup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#primary_backup GoogleDnsRecordSet#primary_backup}

---

##### `wrr`<sup>Optional</sup> <a name="wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.wrr"></a>

```typescript
public readonly wrr: IResolvable | GoogleDnsRecordSetRoutingPolicyWrr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#wrr GoogleDnsRecordSet#wrr}

---

### GoogleDnsRecordSetRoutingPolicyGeo <a name="GoogleDnsRecordSetRoutingPolicyGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyGeo: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.location">location</a></code> | <code>string</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets">healthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}

---

##### `healthCheckedTargets`<sup>Optional</sup> <a name="healthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets"></a>

```typescript
public readonly healthCheckedTargets: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | internal_load_balancers block. |

---

##### `externalEndpoints`<sup>Optional</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internalLoadBalancers`<sup>Optional</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: IResolvable | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ipAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">networkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackup <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyPrimaryBackup: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo">backupGeo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]</code> | backup_geo block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups">enableGeoFencingForBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to enable fencing for backup geo queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio">trickleRatio</a></code> | <code>number</code> | Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy. |

---

##### `backupGeo`<sup>Required</sup> <a name="backupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo"></a>

```typescript
public readonly backupGeo: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#backup_geo GoogleDnsRecordSet#backup_geo}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.primary"></a>

```typescript
public readonly primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#primary GoogleDnsRecordSet#primary}

---

##### `enableGeoFencingForBackups`<sup>Optional</sup> <a name="enableGeoFencingForBackups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups"></a>

```typescript
public readonly enableGeoFencingForBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#enable_geo_fencing_for_backups GoogleDnsRecordSet#enable_geo_fencing_for_backups}

---

##### `trickleRatio`<sup>Optional</sup> <a name="trickleRatio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio"></a>

```typescript
public readonly trickleRatio: number;
```

- *Type:* number

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#trickle_ratio GoogleDnsRecordSet#trickle_ratio}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location">location</a></code> | <code>string</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets">healthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}

---

##### `healthCheckedTargets`<sup>Optional</sup> <a name="healthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets"></a>

```typescript
public readonly healthCheckedTargets: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | internal_load_balancers block. |

---

##### `externalEndpoints`<sup>Optional</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internalLoadBalancers`<sup>Optional</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ipAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">networkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyPrimaryBackupPrimary: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]</code> | internal_load_balancers block. |

---

##### `externalEndpoints`<sup>Optional</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internalLoadBalancers`<sup>Optional</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress">ipAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl">networkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port">port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project">project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region">region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyWrr <a name="GoogleDnsRecordSetRoutingPolicyWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyWrr: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.weight">weight</a></code> | <code>number</code> | The ratio of traffic routed to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets">healthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The ratio of traffic routed to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#weight GoogleDnsRecordSet#weight}

---

##### `healthCheckedTargets`<sup>Optional</sup> <a name="healthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets"></a>

```typescript
public readonly healthCheckedTargets: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | internal_load_balancers block. |

---

##### `externalEndpoints`<sup>Optional</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `internalLoadBalancers`<sup>Optional</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: IResolvable | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

const googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers: googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">ipAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">networkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port">port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project">project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region">region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

---


### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```typescript
public resetLoadBalancerType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```typescript
public readonly loadBalancerTypeInput: string;
```

- *Type:* string

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>

---


### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">putInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints">resetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">resetInternalLoadBalancers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalLoadBalancers` <a name="putInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```typescript
public putInternalLoadBalancers(value: IResolvable | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

---

##### `resetExternalEndpoints` <a name="resetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```typescript
public resetExternalEndpoints(): void
```

##### `resetInternalLoadBalancers` <a name="resetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```typescript
public resetInternalLoadBalancers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput">externalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internalLoadBalancersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalLoadBalancers`<sup>Required</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `externalEndpointsInput`<sup>Optional</sup> <a name="externalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```typescript
public readonly externalEndpointsInput: string[];
```

- *Type:* string[]

---

##### `internalLoadBalancersInput`<sup>Optional</sup> <a name="internalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```typescript
public readonly internalLoadBalancersInput: IResolvable | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

---

##### `externalEndpoints`<sup>Required</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyGeoList <a name="GoogleDnsRecordSetRoutingPolicyGeoList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyGeo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]

---


### GoogleDnsRecordSetRoutingPolicyGeoOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets">putHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets">resetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas">resetRrdatas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheckedTargets` <a name="putHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets"></a>

```typescript
public putHealthCheckedTargets(value: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `resetHealthCheckedTargets` <a name="resetHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets"></a>

```typescript
public resetHealthCheckedTargets(): void
```

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas"></a>

```typescript
public resetRrdatas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets">healthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput">healthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput">rrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckedTargets`<sup>Required</sup> <a name="healthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets"></a>

```typescript
public readonly healthCheckedTargets: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a>

---

##### `healthCheckedTargetsInput`<sup>Optional</sup> <a name="healthCheckedTargetsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput"></a>

```typescript
public readonly healthCheckedTargetsInput: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput"></a>

```typescript
public readonly rrdatasInput: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyGeo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>

---


### GoogleDnsRecordSetRoutingPolicyOutputReference <a name="GoogleDnsRecordSetRoutingPolicyOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo">putGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup">putPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr">putWrr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing">resetEnableGeoFencing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup">resetPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetWrr">resetWrr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGeo` <a name="putGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo"></a>

```typescript
public putGeo(value: IResolvable | GoogleDnsRecordSetRoutingPolicyGeo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]

---

##### `putPrimaryBackup` <a name="putPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup"></a>

```typescript
public putPrimaryBackup(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `putWrr` <a name="putWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr"></a>

```typescript
public putWrr(value: IResolvable | GoogleDnsRecordSetRoutingPolicyWrr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]

---

##### `resetEnableGeoFencing` <a name="resetEnableGeoFencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing"></a>

```typescript
public resetEnableGeoFencing(): void
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetGeo"></a>

```typescript
public resetGeo(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetPrimaryBackup` <a name="resetPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup"></a>

```typescript
public resetPrimaryBackup(): void
```

##### `resetWrr` <a name="resetWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetWrr"></a>

```typescript
public resetWrr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geo">geo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList">GoogleDnsRecordSetRoutingPolicyGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackup">primaryBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrr">wrr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList">GoogleDnsRecordSetRoutingPolicyWrrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput">enableGeoFencingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geoInput">geoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput">primaryBackupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrrInput">wrrInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing">enableGeoFencing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheck">healthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geo"></a>

```typescript
public readonly geo: GoogleDnsRecordSetRoutingPolicyGeoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList">GoogleDnsRecordSetRoutingPolicyGeoList</a>

---

##### `primaryBackup`<sup>Required</sup> <a name="primaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackup"></a>

```typescript
public readonly primaryBackup: GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a>

---

##### `wrr`<sup>Required</sup> <a name="wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrr"></a>

```typescript
public readonly wrr: GoogleDnsRecordSetRoutingPolicyWrrList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList">GoogleDnsRecordSetRoutingPolicyWrrList</a>

---

##### `enableGeoFencingInput`<sup>Optional</sup> <a name="enableGeoFencingInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput"></a>

```typescript
public readonly enableGeoFencingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geoInput"></a>

```typescript
public readonly geoInput: IResolvable | GoogleDnsRecordSetRoutingPolicyGeo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo">GoogleDnsRecordSetRoutingPolicyGeo</a>[]

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: string;
```

- *Type:* string

---

##### `primaryBackupInput`<sup>Optional</sup> <a name="primaryBackupInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput"></a>

```typescript
public readonly primaryBackupInput: GoogleDnsRecordSetRoutingPolicyPrimaryBackup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `wrrInput`<sup>Optional</sup> <a name="wrrInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrrInput"></a>

```typescript
public readonly wrrInput: IResolvable | GoogleDnsRecordSetRoutingPolicyWrr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]

---

##### `enableGeoFencing`<sup>Required</sup> <a name="enableGeoFencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing"></a>

```typescript
public readonly enableGeoFencing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsRecordSetRoutingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```typescript
public resetLoadBalancerType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```typescript
public readonly loadBalancerTypeInput: string;
```

- *Type:* string

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">putInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints">resetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">resetInternalLoadBalancers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalLoadBalancers` <a name="putInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```typescript
public putInternalLoadBalancers(value: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

---

##### `resetExternalEndpoints` <a name="resetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```typescript
public resetExternalEndpoints(): void
```

##### `resetInternalLoadBalancers` <a name="resetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```typescript
public resetInternalLoadBalancers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput">externalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internalLoadBalancersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalLoadBalancers`<sup>Required</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `externalEndpointsInput`<sup>Optional</sup> <a name="externalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```typescript
public readonly externalEndpointsInput: string[];
```

- *Type:* string[]

---

##### `internalLoadBalancersInput`<sup>Optional</sup> <a name="internalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```typescript
public readonly internalLoadBalancersInput: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers</a>[]

---

##### `externalEndpoints`<sup>Required</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets">putHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets">resetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas">resetRrdatas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheckedTargets` <a name="putHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets"></a>

```typescript
public putHealthCheckedTargets(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `resetHealthCheckedTargets` <a name="resetHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets"></a>

```typescript
public resetHealthCheckedTargets(): void
```

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas"></a>

```typescript
public resetRrdatas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets">healthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput">healthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput">rrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckedTargets`<sup>Required</sup> <a name="healthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets"></a>

```typescript
public readonly healthCheckedTargets: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a>

---

##### `healthCheckedTargetsInput`<sup>Optional</sup> <a name="healthCheckedTargetsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput"></a>

```typescript
public readonly healthCheckedTargetsInput: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput"></a>

```typescript
public readonly rrdatasInput: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo">putBackupGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary">putPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups">resetEnableGeoFencingForBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio">resetTrickleRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupGeo` <a name="putBackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo"></a>

```typescript
public putBackupGeo(value: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]

---

##### `putPrimary` <a name="putPrimary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary"></a>

```typescript
public putPrimary(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `resetEnableGeoFencingForBackups` <a name="resetEnableGeoFencingForBackups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups"></a>

```typescript
public resetEnableGeoFencingForBackups(): void
```

##### `resetTrickleRatio` <a name="resetTrickleRatio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio"></a>

```typescript
public resetTrickleRatio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo">backupGeo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput">backupGeoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput">enableGeoFencingForBackupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput">primaryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput">trickleRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups">enableGeoFencingForBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio">trickleRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupGeo`<sup>Required</sup> <a name="backupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo"></a>

```typescript
public readonly backupGeo: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary"></a>

```typescript
public readonly primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a>

---

##### `backupGeoInput`<sup>Optional</sup> <a name="backupGeoInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput"></a>

```typescript
public readonly backupGeoInput: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo</a>[]

---

##### `enableGeoFencingForBackupsInput`<sup>Optional</sup> <a name="enableGeoFencingForBackupsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput"></a>

```typescript
public readonly enableGeoFencingForBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `trickleRatioInput`<sup>Optional</sup> <a name="trickleRatioInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput"></a>

```typescript
public readonly trickleRatioInput: number;
```

- *Type:* number

---

##### `enableGeoFencingForBackups`<sup>Required</sup> <a name="enableGeoFencingForBackups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups"></a>

```typescript
public readonly enableGeoFencingForBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trickleRatio`<sup>Required</sup> <a name="trickleRatio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio"></a>

```typescript
public readonly trickleRatio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsRecordSetRoutingPolicyPrimaryBackup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```typescript
public resetLoadBalancerType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```typescript
public readonly loadBalancerTypeInput: string;
```

- *Type:* string

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers">putInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetExternalEndpoints">resetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetInternalLoadBalancers">resetInternalLoadBalancers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalLoadBalancers` <a name="putInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers"></a>

```typescript
public putInternalLoadBalancers(value: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]

---

##### `resetExternalEndpoints` <a name="resetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetExternalEndpoints"></a>

```typescript
public resetExternalEndpoints(): void
```

##### `resetInternalLoadBalancers` <a name="resetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetInternalLoadBalancers"></a>

```typescript
public resetInternalLoadBalancers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpointsInput">externalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput">internalLoadBalancersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalLoadBalancers`<sup>Required</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a>

---

##### `externalEndpointsInput`<sup>Optional</sup> <a name="externalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpointsInput"></a>

```typescript
public readonly externalEndpointsInput: string[];
```

- *Type:* string[]

---

##### `internalLoadBalancersInput`<sup>Optional</sup> <a name="internalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput"></a>

```typescript
public readonly internalLoadBalancersInput: IResolvable | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers</a>[]

---

##### `externalEndpoints`<sup>Required</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```typescript
public resetLoadBalancerType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```typescript
public readonly loadBalancerTypeInput: string;
```

- *Type:* string

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers">putInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetExternalEndpoints">resetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">resetInternalLoadBalancers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalLoadBalancers` <a name="putInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```typescript
public putInternalLoadBalancers(value: IResolvable | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]

---

##### `resetExternalEndpoints` <a name="resetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```typescript
public resetExternalEndpoints(): void
```

##### `resetInternalLoadBalancers` <a name="resetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```typescript
public resetInternalLoadBalancers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers">internalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpointsInput">externalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">internalLoadBalancersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpoints">externalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalLoadBalancers`<sup>Required</sup> <a name="internalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```typescript
public readonly internalLoadBalancers: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `externalEndpointsInput`<sup>Optional</sup> <a name="externalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```typescript
public readonly externalEndpointsInput: string[];
```

- *Type:* string[]

---

##### `internalLoadBalancersInput`<sup>Optional</sup> <a name="internalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```typescript
public readonly internalLoadBalancersInput: IResolvable | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers</a>[]

---

##### `externalEndpoints`<sup>Required</sup> <a name="externalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```typescript
public readonly externalEndpoints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrList <a name="GoogleDnsRecordSetRoutingPolicyWrrList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get"></a>

```typescript
public get(index: number): GoogleDnsRecordSetRoutingPolicyWrrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyWrr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>[]

---


### GoogleDnsRecordSetRoutingPolicyWrrOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer"></a>

```typescript
import { googleDnsRecordSet } from '@cdktf/provider-google-beta'

new googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets">putHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets">resetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas">resetRrdatas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheckedTargets` <a name="putHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets"></a>

```typescript
public putHealthCheckedTargets(value: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `resetHealthCheckedTargets` <a name="resetHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets"></a>

```typescript
public resetHealthCheckedTargets(): void
```

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas"></a>

```typescript
public resetRrdatas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets">healthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput">healthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput">rrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckedTargets`<sup>Required</sup> <a name="healthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets"></a>

```typescript
public readonly healthCheckedTargets: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a>

---

##### `healthCheckedTargetsInput`<sup>Optional</sup> <a name="healthCheckedTargetsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput"></a>

```typescript
public readonly healthCheckedTargetsInput: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput"></a>

```typescript
public readonly rrdatasInput: string[];
```

- *Type:* string[]

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDnsRecordSetRoutingPolicyWrr;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr">GoogleDnsRecordSetRoutingPolicyWrr</a>

---



