# `googleNetworkSecurityInterceptEndpointGroup` Submodule <a name="`googleNetworkSecurityInterceptEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityInterceptEndpointGroup <a name="GoogleNetworkSecurityInterceptEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group google_network_security_intercept_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup(scope: Construct, id: string, config: GoogleNetworkSecurityInterceptEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig">GoogleNetworkSecurityInterceptEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig">GoogleNetworkSecurityInterceptEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityInterceptEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityInterceptEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityInterceptEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityInterceptEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityInterceptEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityInterceptEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroupInput">interceptDeploymentGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupIdInput">interceptEndpointGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroup">interceptDeploymentGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupId">interceptEndpointGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interceptDeploymentGroupInput`<sup>Optional</sup> <a name="interceptDeploymentGroupInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroupInput"></a>

```typescript
public readonly interceptDeploymentGroupInput: string;
```

- *Type:* string

---

##### `interceptEndpointGroupIdInput`<sup>Optional</sup> <a name="interceptEndpointGroupIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupIdInput"></a>

```typescript
public readonly interceptEndpointGroupIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityInterceptEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptDeploymentGroup`<sup>Required</sup> <a name="interceptDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroup"></a>

```typescript
public readonly interceptDeploymentGroup: string;
```

- *Type:* string

---

##### `interceptEndpointGroupId`<sup>Required</sup> <a name="interceptEndpointGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupId"></a>

```typescript
public readonly interceptEndpointGroupId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityInterceptEndpointGroupConfig <a name="GoogleNetworkSecurityInterceptEndpointGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupConfig: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptDeploymentGroup">interceptDeploymentGroup</a></code> | <code>string</code> | Immutable. The Intercept Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/interceptDeploymentGroups/{interceptDeploymentGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptEndpointGroupId">interceptEndpointGroupId</a></code> | <code>string</code> | ID of the Intercept Endpoint Group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.location">location</a></code> | <code>string</code> | The location of the Intercept Endpoint Group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `interceptDeploymentGroup`<sup>Required</sup> <a name="interceptDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptDeploymentGroup"></a>

```typescript
public readonly interceptDeploymentGroup: string;
```

- *Type:* string

Immutable. The Intercept Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/interceptDeploymentGroups/{interceptDeploymentGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_deployment_group GoogleNetworkSecurityInterceptEndpointGroup#intercept_deployment_group}

---

##### `interceptEndpointGroupId`<sup>Required</sup> <a name="interceptEndpointGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptEndpointGroupId"></a>

```typescript
public readonly interceptEndpointGroupId: string;
```

- *Type:* string

ID of the Intercept Endpoint Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_endpoint_group_id GoogleNetworkSecurityInterceptEndpointGroup#intercept_endpoint_group_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Intercept Endpoint Group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#location GoogleNetworkSecurityInterceptEndpointGroup#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#labels GoogleNetworkSecurityInterceptEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#timeouts GoogleNetworkSecurityInterceptEndpointGroup#timeouts}

---

### GoogleNetworkSecurityInterceptEndpointGroupTimeouts <a name="GoogleNetworkSecurityInterceptEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityInterceptEndpointGroupTimeouts: googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptEndpointGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityInterceptEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

---



